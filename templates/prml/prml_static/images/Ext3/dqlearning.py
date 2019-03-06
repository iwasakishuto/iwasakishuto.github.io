# coding: utf-8
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline
import gym
from collections import namedtuple

#=== パラメータの設定 ===
ENV = 'CartPole-v0'  # 使用する課題名
GAMMA = 0.99  # 時間割引率
MAX_STEPS = 200  # 1試行のstep数
NUM_EPISODES = 500  # 最大試行回数
Transition = namedtuple(
    'Transition', ('state', 'action', 'next_state', 'reward'))

from JSAnimation.IPython_display import display_animation
from matplotlib import animation
from IPython.display import display

def display_frames_as_gif(frames):
    """
    学習済みのモデルで CartPole をやらせた結果を、
    それぞれの状態を画像として保存することで、gif画像として得る。
    """
    plt.figure(figsize=(frames[0].shape[1]/72.0, frames[0].shape[0]/72.0),
               dpi=72)
    patch = plt.imshow(frames[0])
    plt.axis('off')

    def animate(i):
        patch.set_data(frames[i])

    anim = animation.FuncAnimation(plt.gcf(), animate, frames=len(frames),
                                   interval=50)

    anim.save('movie_cartpole_DQN.mp4')
    display(display_animation(anim, default_mode='loop'))

class ReplayMemory:

    def __init__(self, CAPACITY):
        self.capacity = CAPACITY  # メモリの最大長
        self.memory = []  # 経験を格納する変数
        self.index = 0    # 保存する index を保持。

    def push(self, state, action, next_state, reward):
        """transition = (state, action, next_state, reward)をメモリに保存する"""

        if len(self.memory) < self.capacity:
            self.memory.append(None) # メモリが満タンでないときは格納する枠を追加する。
        self.memory[self.index] = Transition(state, action, next_state, reward)
        self.index = (self.index + 1) % self.capacity  # 保存するindexを1つずつずらしていく。

    def sample(self, batch_size):
        '''batch_size分だけ、ランダムに保存内容を取り出す'''
        return random.sample(self.memory, batch_size)

    def __len__(self):
        '''関数lenに対して、現在の変数memoryの長さを返す'''
        return len(self.memory)

class Agent:

    def __init__(self, num_states, num_actions):
        '''状態と行動の数を設定'''
        self.brain = Brain(num_states, num_actions)

    def update_q_function(self):
        '''Q関数の更新'''
        self.brain.replay()

    def get_action(self, state, episode):
        '''行動の決定'''
        action = self.brain.decide_action(state, episode)
        return action

    def memorize(self, state, action, next_state, reward):
        '''memoryオブジェクトに、(state, action, next_state, reward) の内容を保存'''
        self.brain.memory.push(state, action, next_state, reward)

import random
import torch
from torch import nn
from torch import optim
import torch.nn.functional as F

BATCH_SIZE = 32
CAPACITY = 10000

class Brain:
    def __init__(self, num_states, num_actions):
        """
        Neural Network の構築
        @param num_state ：状態変数の種類(x,v,θ,ω)
        @param num_action：行動の種類(right, left)
        """
        self.num_actions = num_actions # 行動の種類
        self.memory = ReplayMemory(CAPACITY) # 経験を記憶するメモリオブジェクト

        #=== Neural Network を構築 ===
        self.model = nn.Sequential()
        self.model.add_module('fc1', nn.Linear(num_states, 32))
        self.model.add_module('relu1', nn.ReLU())
        self.model.add_module('fc2', nn.Linear(32, 32))
        self.model.add_module('relu2', nn.ReLU())
        self.model.add_module('fc3', nn.Linear(32, num_actions))
        #=== 最適化手法の設定 ===
        self.optimizer = optim.Adam(self.model.parameters(), lr=0.0001)

    def replay(self):
        """
        Experience Replayでネットワークの結合パラメータを学習する。
        これによって時系列の相関関係を取り除くとともに、
        Neural Network においてバッチ学習が可能になる。
        """
        # メモリサイズがミニバッチより小さい間は何もしない
        if len(self.memory) < BATCH_SIZE:
            return

        # ミニバッチの作成
        transitions = self.memory.sample(BATCH_SIZE)

        #=== 各変数をミニバッチに対応する形に変形 ===
        # transitionsには、1stepごとの (state, action, next_state, reward) が、BATCH_SIZE 分格納されている。
        # つまり、(state, action, next_state, reward) × BATCH_SIZE
        # これをミニバッチの形に変形したい。つまり、
        # (state×BATCH_SIZE, action×BATCH_SIZE, next_state×BATCH_SIZE, reward×BATCH_SIZE)にする。
        batch = Transition(*zip(*transitions))
        # ============================================
        #   【少し難しいので、 "zip", "*" の使い方サンプル 】
        #   lst = [
        #       [ 1, 2, 3],
        #       [ 4, 5, 6],
        #   ]
        #   for cols in zip(*lst):  for row in lst:
        #       print(cols)             print(row)
        #   >>>(1, 4)               >>>[1, 2, 3]
        #      (2, 5)                  [4, 5, 6]
        #      (3, 6)
        # =============================================

        # 型の変形 (Variable) にし、cat (=concat) で shape も修正。
        state_batch  = torch.cat(batch.state)
        action_batch = torch.cat(batch.action)
        reward_batch = torch.cat(batch.reward)
        non_final_next_states = torch.cat([s for s in batch.next_state
                                           if s is not None])

        """ ネットワークを推論モードに切り替える """
        # 教師信号となる Q(s_t, a_t)値 を求める。
        self.model.eval() # ネットワークを推論モードに切り替える。

        # ネットワークが出力した Q(s_t, a_t) を求める。
        # なお、self.model(state_batch) は、右左の両方の Q値 を出力しているが、
        # 実行したアクション a_t に対応する next_state しかわからないので、
        # action_batch から実際に行った行動 a_t が右か左かの index を求め、それに対応する Q値 のみを gather で抜き出す。
        state_action_values = self.model(state_batch).gather(1, action_batch)

        # max{Q(s_t+1, a)}値 を求める。ただし、次の状態があるかには注意する！

        # cartpole が done になっておらず、next_state があるかをチェックするインデックスマスクを作成
        non_final_mask = torch.ByteTensor(tuple(map(lambda s: s is not None,
                                                    batch.next_state)))
        # まずは全部 0 にしておく
        next_state_values = torch.zeros(BATCH_SIZE)

        # 次の状態がある index の最大 Q値:max{Q(s_t+1, a)} を求める。
        # 既存モデルで出力を求め、max(1) で列方向の最大値を求める。
        # これは、[値,index] という形をしているので、index=0 にアクセスし、Q値 を取り出す。(detach)
        next_state_values[non_final_mask] = self.model(
            non_final_next_states).max(1)[0].detach()

        # Q(s_t, a_t) 値を、Q学習の式から求める。これが、正解データとなる。
        expected_state_action_values = reward_batch + GAMMA * next_state_values

        """ ネットワークを訓練モードに切り替える """
        self.model.train()

        # 損失関数を計算する(smooth_l1_loss = Huberloss)
        # expected_state_action_valuesは
        # sizeが[minbatch]になっているので、unsqueezeで[minibatch x 1]へ変更。
        loss = F.smooth_l1_loss(state_action_values,
                                expected_state_action_values.unsqueeze(1))

        # 結合パラメータの更新。
        self.optimizer.zero_grad()  # 勾配をリセット
        loss.backward()  # バックプロパゲーションを計算
        self.optimizer.step()  # 結合パラメータを更新

    def decide_action(self, state, episode):
        """
        関数の概要：現在の状態に応じて、行動を決定する。なお、最適解にとどまらずに探索すべきなので、
        　　　　　　ε-greedy法を利用し、徐々に最適行動のみを採用するようにしていく。
        @param  state  ：現在の状況
        @param  episode：試行の回数を記録する。
        @return action ：選んだ行動([torch.LongTensor of size 1x1]の形)
        """
        epsilon = 0.5 * (1 / (episode + 1))

        if epsilon <= np.random.uniform(0, 1):
            """最適化行動"""
            self.model.eval()  # 推論モードに切り替え
            with torch.no_grad():
                action = self.model(state).max(1)[1].view(1, 1)
        else:
            """ランダムチョイス"""
            action = torch.LongTensor(
                [[random.randrange(self.num_actions)]])

        return action

class Environment:

    def __init__(self, ENV):
        self.env = gym.make(ENV)  # 実行する課題を設定
        num_states = self.env.observation_space.shape[0]  # 課題の状態数を取得
        num_actions = self.env.action_space.n             # 課題の行動数を取得
        self.agent = Agent(num_states, num_actions) # 環境内で行動するAgentを生成

    def run(self):
        '''実行'''
        episode_10_list = np.zeros(10)  # 10 試行分の立ち続けた step 数を格納し、平均を出力する(学習具合を測る指標として)
        complete_episodes = 0  # 195 step 以上連続で立ち続けた試行数
        episode_final = False  # 最後の試行フラグ
        frames = [] # 最後の試行を動画にするために画像を格納する変数

        for episode in range(NUM_EPISODES):
            observation = self.env.reset() # 環境の初期化

            state = observation  # 観測をそのまま状態 s として使用
            state = torch.from_numpy(state).type(torch.FloatTensor)  # PyTorchのテンソルに変換
            state = torch.unsqueeze(state, 0)  # size 4 を size 1x4 に変換

            for step in range(MAX_STEPS):
                if episode_final is True:  # 最終試行ではframesに各時刻の画像を追加していく → gif
                    frames.append(self.env.render(mode='rgb_array'))

                action = self.agent.get_action(state, episode) # 行動を求める

                # 行動 a_t の実行により、s_{t+1} と done フラグ (終了したか) を求める。
                observation_next, _, done, _ = self.env.step(action.item())

                # 次の状態から、報酬や episode の終了評価、next_state の設定を行う。
                if done:
                    next_state = None  # 次の状態はないので、Noneを格納
                    # 直近 10 episode の step 数リストに追加
                    episode_10_list = np.hstack((episode_10_list[1:], step + 1))

                    ''' 「ステップ数が 200 経過」 or 「一定角度以上」 → 「done=True」なので、どちらなのかの判断を行う。'''
                    if step < 195:
                        reward = torch.FloatTensor([-1.0])  # 途中でこけてた場合は、罰則として報酬 -1 を与える。
                        complete_episodes = 0  # 連続成功記録をリセット
                    else:
                        reward = torch.FloatTensor([1.0])  # 立ったまま終了時は報酬 1 を与える
                        complete_episodes = complete_episodes + 1  # 連続記録を更新
                else:
                    reward = torch.FloatTensor([0.0])  # 普段は報酬0
                    next_state = observation_next  # 観測をそのまま状態とする
                    next_state = torch.from_numpy(next_state).type(torch.FloatTensor)  # PyTorchのテンソルに変換
                    next_state = torch.unsqueeze(next_state, 0)  # size 4 を size 1x4 に変換

                # メモリに経験を追加
                self.agent.memorize(state, action, next_state, reward)

                # Experience Replayで Q関数 を更新
                self.agent.update_q_function()

                # 観測の更新
                state = next_state

                # 終了時の処理
                if done:
                    print('%d Episode: Finished after %d steps：10試行の平均step数 = %.1lf' % (
                        episode, step + 1, episode_10_list.mean()))
                    break

            if episode_final is True:
                # 動画を保存と描画
                display_frames_as_gif(frames)
                break

            # 10連続で200step経ち続けたら成功
            if complete_episodes >= 10:
                print('10回連続成功')
                episode_final = True  # 次の試行を描画を行う最終試行とする

if __name__ == "__main__":
    cartpole_env = Environment(ENV)
    cartpole_env.run()
