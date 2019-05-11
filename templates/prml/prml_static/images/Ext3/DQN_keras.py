# coding:utf-8
import gym  # 倒立振子(cartpole)の実行環境
from gym import wrappers  # gymの画像保存
import numpy as np
import time
import tensorflow as tf
from keras.models import Sequential
from keras.layers import Dense
from keras.optimizers import Adam
from keras.utils import plot_model
from keras import backend as K
from collections import deque # 先頭からも、最後尾からも O(1) で要素を取り出すことのできるデータ構造

def huberloss(y_true, y_pred):
    """
    関数の概要：損失関数（Huber関数）に通して損失を計算する。
    EPSILON から遠いところでは線形にしか増加しないようになっている。
    """
    err  = y_true - y_pred
    cond    = K.abs(err) > EPSILON
    H_true  = K.abs(err) - EPSILON**2 / 2
    H_false = K.square(err)/2
    loss = tf.where(cond, H_true, H_false)
    return K.mean(loss)

def get_action(state, episode, Q_main):
    """
    カートの状態に応じて、行動を決定するクラス。
    なお、ε-greedy法を用いるため、徐々に既知の最適行動を割り付ける。
    """
    epsilon = 0.001 + 0.9 / (1.0+episode)
    if epsilon <= np.random.uniform(0, 1):
        retTargetQs = Q_main.model.predict(state)[0]
        action = np.argmax(retTargetQs)   # 最大の報酬を返す（と予測されている）行動を選択する。
    else:
        action = np.random.choice([0, 1]) # ランダムに行動する（未知の行動を取る可能性があり）
    return action

class QNetwork:
    """
    Q関数をニューラルネットワーク化したものをクラスとして定義する。
    """
    def __init__(self, learning_rate=0.01, state_size=4, action_size=2, hidden_size=10):
        """
        ニューラルネットワークの初期化
        @param learning_rate：Adamの学習率
        @param state_size   ：入力の次元 (x,v,θ,ω)
        @param action_size  ：出力の次元 (right, left)
        @param hidden_size  ：隠れ層の次元（各層の次元は固定）
        """
        self.model = Sequential()
        self.model.add(Dense(hidden_size, activation='relu', input_dim=state_size))
        self.model.add(Dense(hidden_size, activation='relu'))
        self.model.add(Dense(action_size, activation='linear'))
        self.optimizer = Adam(lr=learning_rate)
        self.model.compile(loss=huberloss, optimizer=self.optimizer) # loss='mse'もアリ。

    def replay(self, memory, batch_size, Q_target):
        """
        関数の概要：重みの学習を行う。
        @param memory    ：学習データセット
        @param batch_size：Fixed Target Q-Network 用のミニバッチのサイズ
        @param Q_target  ：max(Q(s,a))を評価する方の行動価値関数Q
        """
        inputs     = np.zeros((batch_size, 4)) # 状態 s(t) の次元数 = 位置 x, 速度 v, 棒の角度 θ, 棒の角速度
        targets    = np.zeros((batch_size, 2)) # 行動 a(t) の次元数 ＝ 右 or 左
        mini_batch = memory.sample(batch_size) # ミニバッチを作成する。

        for i, (state_b, action_b, reward_b, next_state_b) in enumerate(mini_batch):
            inputs[i:i+1] = state_b
            target = reward_b

            if not (next_state_b == np.zeros(state_b.shape)).all(axis=1):
                """
                行動価値関数Qを求める。
                ただし、DDQNにも対応できるよう、以下の二つに分割する。
                ・Q_main  ：価値と行動を計算する
                ・Q_target：max(Q(s,a))を評価する
                """
                retmainQs   = self.model.predict(next_state_b)[0]
                next_action = np.argmax(retmainQs)  # 最大の報酬を返す行動を選択
                target = reward_b + GAMMA * Q_target.model.predict(next_state_b)[0][next_action]

            targets[i] = self.model.predict(state_b) # Qネットワークの出力
            targets[i][action_b] = target            # 教師信号

        self.model.fit(inputs, targets, epochs=1, verbose=0) # epochsは訓練データの反復回数、verbose=0は表示なしの設定

class Memory:
    """
    メモリクラス。
    ミニバッチを作成することで、以下の二つを実現することができる。
    ・Experience Replay     ：時系列データの相関を取り除く。
    ・Fixed Target Q-Network：ミニバッチの間はパラメータを固定する。
    """
    def __init__(self, max_size=1000):
        """
        メモリクラスの初期化。
        なお、最大のサイズを max_size に固定したデータ構造を取っている。
        """
        self.buffer = deque(maxlen=max_size) # 1000データごとのデータ構造。

    def add(self, experience):
        """
        メモリクラスにデータを追加する。
        この時 max_size を越えた分のデータは、自動的に前から削除されるので新しいデータに更新される。
        """
        self.buffer.append(experience)

    def sample(self, batch_size):
        """
        バッファのデータからバッチサイズ分のデータをランダムサンプリングする
        """
        idx = np.random.choice(np.arange(len(self.buffer)), size=batch_size, replace=False)
        return [self.buffer[i] for i in idx]

    def size(self):
        return len(self.buffer)

#=== 強化学習のパラメータ ===
MAX_STEPS   = 200  # １回の試行の step 数
GOAL_REWARD = 195  # この報酬を超えると学習終了
N_RECENT    = 10   # 直近この数の持続step数の平均がGOAL_REWARDを超えていれば学習が終了。
N_EPISODES  = 299  # 総試行回数
is_learned  = 0    # 学習が終わったフラグ
is_render   = 0    # 0：描画なし, 1：描画する
is_dqn      = 1    # 0：DDQN,    1：DQN
EPSILON     = 1    # Huber関数の ε
GAMMA       = 0.99 # 割引係数

#=== Deep Q Network のパラメータ ===
hidden_size   = 16      # Q-networkの隠れ層のニューロンの数
learning_rate = 0.00001 # Q-networkの学習係数
memory_size   = 10000   # バッファーメモリの大きさ
batch_size    = 32      # Q-networkを更新するバッチの大きさ

#=== 初期化 ===
env = gym.make('CartPole-v0')
total_reward_vec = np.zeros(N_RECENT) # 各試行の報酬を格納する
Q_main   = QNetwork(hidden_size=hidden_size, learning_rate=learning_rate) # 価値と行動を計算する方
Q_target = QNetwork(hidden_size=hidden_size, learning_rate=learning_rate) # max(Q(s_t+1,a_t+1)) を評価する方
# plot_model(Q_main.model, to_file='Qnetwork.png', show_shapes=True)      # Qネットワークの可視化
memory   = Memory(max_size=memory_size)

if __name__ == "__main__":
    for episode in range(N_EPISODES):

        #=== 環境の初期化（ゲームのリセット） ===
        env.reset()
        state, reward, done, _ = env.step(env.action_space.sample()) # 1step目は適当な行動をとる
        state = np.reshape(state, [1, 4]) # list型のstateを、1行4列の行列に変換
        episode_reward = 0
        # Q関数は、２つに分けているが、学習の際に同じ重みを利用する。
        Q_target.model.set_weights(Q_main.model.get_weights())

        for t in range(MAX_STEPS + 1): # 1試行のループ
            if (is_learned == 1) and is_render: # 学習が終了したらcartPoleを描画する
                env.render()
                time.sleep(0.1)
                print(state[0, 0]) # 終了時のカートの位置 x を出力する

            action = get_action(state, episode, Q_main)       # 時刻tでの行動を決定する
            next_state, reward, done, info = env.step(action) # 行動 a_t の実行による、s_{t+1}, R_{t} を計算する
            next_state = np.reshape(next_state, [1, 4])       # list型の state を、1行4列の行列に変換

            """
            【報酬の計算】
            （※ 報酬のclippingを上手いこと取り入れ、以下のようにすると、200stepいくものが現れず、報酬が-1で固定されるのでなんとかしたい。）
            ①倒れて終了した場合　：-200 の罰則項を足す。
            ②倒れずに終了した場合：普段通り 1 の報酬を与える。
            ③まだ続く場合　　　　：倒れていないので、 1 の報酬を与える。
            この報酬 reward を episode_reward に足していくことで、
            episode_reward が総持続時間を意味することになる。
            """
            if done:
                next_state = np.zeros(state.shape) # 次の状態 s_{t+1} はないので
                if t < 195:
                    reward = -200 # ①倒れて終了した場合
                else:
                    reward = 1 # ②倒れずに終了した場合
            else:
                reward = 1 # ③まだ続く場合
            episode_reward += reward

            memory.add((state, action, reward, next_state)) # メモリの更新
            state = next_state # 状態の更新

            # Qネットワークの重みを学習・更新（replay）
            if (memory.size() > batch_size) and not is_learned:
                """
                バッチサイズが閾値を超えたら再学習してパラメータを変更する。
                つまり、Fixed Target Q-Network を行なっているということ。
                """
                Q_main.replay(memory, batch_size, Q_target)

            if is_dqn:
                # 学習の結果の重みを各試行中にも共有する。
                Q_target.model.set_weights(Q_main.model.get_weights())

            if done:
                total_reward_vec = np.hstack((total_reward_vec[1:], episode_reward)) # 直近のエピソードの報酬を記録していく。
                print('{:3d} Episode finished after {:3d} time steps / mean {:.2f}'.format(episode, t+1, total_reward_vec.mean()))
                break

        if total_reward_vec.mean() >= GOAL_REWARD: # 直近の100エピソードが規定報酬以上であれば成功
            print('Episode %d train agent successfuly!' % episode)
            is_learned = 1
            if isrender == 0: # 学習済みフラグを更新
                isrender = 1
