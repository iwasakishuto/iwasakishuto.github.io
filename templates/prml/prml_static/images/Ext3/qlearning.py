# coding:utf-8
import gym  #倒立振子(cartpole)の実行環境
from gym import wrappers  #gymの画像保存
import numpy as np
import time

def make_bins(clip_min, clip_max, num):
    """
    関数の概要：digitize_stateで離散値のindexに直すための区切りを作成する。
    @param clip_min：最小値
    @param clip_max：最大値
    @param num     ：digitize_stateで分割したい数

    np.linspace で num+1この区切りを作成する
    →[1:-1]とスライスするので区切りの数は (num+1)-2 = num-1
    →間の数は(num-1)-1 = num-2、区切りの外側が2つあるので、(num-2)+2 = num となり、結局num個に分割可能。
    """
    return np.linspace(clip_min, clip_max, num + 1)[1:-1]
def digitize_state(observation):
    """
    関数の概要：各値を離散値のラベルに変換し、状態をQ-Tableでのindexで表す。
    　　　　　　なお、N進数でindexを表していると考えればsumの部分が理解しやすい。
    @param observation：観測値（x,v,θ,ω）
    @return index     ：Q-Tableのindex

    【np.digitizeの説明】
    x    = np.array([-0.5, 0, 0.5, 1, 1.5, 2, 2.5])
    bins = np.array([0,1,2])
    np.digitize(x, bins)
    >>> array([0, 1, 1, 2, 2, 3, 3])
    """
    x, v, theta, omega = observation
    digitized = [
        np.digitize(x,     bins=make_bins(-2.4, 2.4, N_DIZITIZED)),
        np.digitize(v,     bins=make_bins(-3.0, 3.0, N_DIZITIZED)),
        np.digitize(theta, bins=make_bins(-0.5, 0.5, N_DIZITIZED)),
        np.digitize(omega, bins=make_bins(-2.0, 2.0, N_DIZITIZED))
    ]
    index = sum([val * (N_DIZITIZED**i) for i, val in enumerate(digitized)])
    return index
def get_action(next_state, episode):
    """
    関数の概要：行動a(t)をε-greedy法を用いて求める。
    　　　　　　なお、εの値を徐々に小さくすることで、最適行動を取る確率を高めている。
    @param next_state：次の状態のQ-Tableでのindex
    @param episode   ：試行回数。この値でεを調整する
    """
    epsilon = 0.5 * (1 / (episode + 1))
    if epsilon <= np.random.uniform(0, 1):
        next_action = np.argmax(q_table[next_state])
    else:
        next_action = np.random.choice([0, 1])
    return next_action
def update_Qtable(q_table, state, action, reward, next_state):
    """
    関数の概要：Qテーブルを更新する。
                next_Max_Q では、２種類の行動のうち報酬の大きいものを返す。
    式： Q(s,a) = (1−α)Q(s,a) + α(R(s,a)+γmax E[Q(s',a')])
    """
    gamma = 0.99
    alpha = 0.5
    next_Max_Q = max(q_table[next_state][0], q_table[next_state][1])
    q_table[state, action] = (1-alpha) * q_table[state, action] +\
                              alpha     * (reward + gamma*next_Max_Q)
    return q_table

#=== パラメータの初期化 ===
MAX_STEPS   = 200  # １回の試行の step 数
GOAL_REWARD = 195
N_RECENT    = 100  # 直近この数の持続step数の平均がGOAL_REWARDを超えていれば学習が終了。
N_EPISODES  = 2000 # 総試行回数
N_DIZITIZED = 6    # 離散化の分割数
is_learned  = 0    # 学習が終わったフラグ
is_render   = 0    # 描画フラグ

env = gym.make('CartPole-v0')
q_table = np.random.uniform( low=-1, high=1, size=(N_DIZITIZED**4, env.action_space.n) )
total_reward_vec = np.zeros(N_RECENT) # 各試行の報酬を格納する
final_x = np.zeros((N_EPISODES, 1))   # 学習後、各試行の t=200 でのｘの位置を格納する

if __name__ == "__main__":
    for episode in range(N_EPISODES):

        #=== 環境の初期化（ゲームのリセット） ===
        observation = env.reset() # ランダムで初期値が与えられる。
        state  = digitize_state(observation)
        action = np.argmax(q_table[state])
        episode_reward = 0

        for t in range(MAX_STEPS): # １試行のループ
            if is_learned == 1:    # 学習が終了したらcartPoleを描画する
                env.render()
                time.sleep(0.1)
                print (observation[0])  #カートのx位置を出力

            observation, reward, done, info = env.step(action)
            """
            【報酬の計算】
            ①倒れて終了した場合　：-200 の罰則項を足す。
            ②倒れずに終了した場合：普段通り 1 の報酬を与える。
            ③まだ続く場合　　　　：倒れていないので、 1 の報酬を与える。
            この報酬 reward を episode_reward に足していくことで、
            episode_reward が総持続時間を意味することになる。
            """
            if done:
                if t < 195:
                    reward = -200 # ①倒れて終了した場合
                else:
                    reward = 1 # ②倒れずに終了した場合
            else:
                reward = 1 # ③まだ続く場合
            episode_reward += reward  # 報酬を追加（これが持続時間に相当）

            next_state = digitize_state(observation) # indexで状態を表す。
            q_table    = update_Qtable(q_table, state, action, reward, next_state)
            action     = get_action(next_state, episode) # 次の行動を決定する。
            state      = next_state # 状態を一つ進め、ループを回す。
            if done:
                print('%d Episode finished after %f time steps / mean %f' %
                      (episode, t + 1, total_reward_vec.mean()))
                total_reward_vec = np.hstack((total_reward_vec[1:], episode_reward)) # 直近の報酬を記録していく。
                if is_learned == 1:  # 学習終わっていた場合、最終位置xを格納
                    final_x[episode, 0] = observation[0]
                break

        if (total_reward_vec.mean() >= GOAL_REWARD):  # 直近の100エピソードが規定報酬以上であれば成功
            print('Episode %d train agent successfuly!' % episode)
            is_learned = 1
            # np.savetxt('learned_Q_table.csv',q_table, delimiter=",") # Qtableを保存する場合
            if is_render == 0:
                # env = wrappers.Monitor(env, './movie/cartpole-experiment-1') # 動画を保存する場合
                is_render = 1

    if is_learned:
        np.savetxt('final_x.csv', final_x, delimiter=",")
