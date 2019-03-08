# coding: utf-8
import numpy as np
import matplotlib.pyplot as plt
import gym
from collections import namedtuple

#=== パラメータの設定 ===
ENV = 'CartPole-v0'  # 使用する課題名
GAMMA = 0.99  # 時間割引率
MAX_STEPS = 200  # 1試行のstep数
NUM_EPISODES = 500  # 最大試行回数
Transition = namedtuple(
    'Transition', ('state', 'action', 'next_state', 'reward'))

class ReplayMemory:

    def __init__(self, CAPACITY):
        self.capacity = CAPACITY  # メモリの最大長さ
        self.memory = []  # 経験を保存する変数
        self.index = 0  # 保存するindexを示す変数

    def push(self, state, action, state_next, reward):
        '''transition = (state, action, state_next, reward)をメモリに保存する'''

        if len(self.memory) < self.capacity:
            self.memory.append(None)  # メモリが満タンでないときは足す

        # namedtuple の Transition を使用し、値とフィールド名をペアにして保存する
        self.memory[self.index] = Transition(state, action, state_next, reward)

        self.index = (self.index + 1) % self.capacity  # 保存するindexを1つずらす

    def sample(self, batch_size):
        '''batch_size分だけ、ランダムに保存内容を取り出す'''
        return random.sample(self.memory, batch_size)

    def __len__(self):
        '''関数lenに対して、現在の変数memoryの長さを返す'''
        return len(self.memory)

#=== ネットワークの構築 ===
import torch.nn as nn
import torch.nn.functional as F

class Net(nn.Module): # torch.nn.Module を親クラスとして継承。

    def __init__(self, n_in, n_mid, n_out):
        super(Net, self).__init__() # オーバーライド
        self.fc1 = nn.Linear(n_in, n_mid)
        self.fc2 = nn.Linear(n_mid, n_mid)
        # Dueling Network
        self.fc3_adv = nn.Linear(n_mid, n_out)  # Advantage 関数
        self.fc3_v = nn.Linear(n_mid, 1)  # 状態価値関数 V(s)

    def forward(self, x):
        h1 = F.relu(self.fc1(x))
        h2 = F.relu(self.fc2(h1))

        adv = self.fc3_adv(h2)  # Advantage 関数の出力
        val = self.fc3_v(h2).expand(-1, adv.size(1))  # 状態価値関数 V(s) の出力(advとサイズを揃えている。)
        output = val + adv - adv.mean(1, keepdim=True).expand(-1, adv.size(1))
        # バイアス項の寄与をなくすために、val+adv から avg(adv) を引き算する

        return output

import random
import torch
from torch import nn
from torch import optim
import torch.nn.functional as F

BATCH_SIZE = 32
CAPACITY = 10000

class Brain:
    def __init__(self, num_states, num_actions, num_hidden=32):
        '''Dueling Neural Network の構築'''
        self.num_actions = num_actions  # 行動の種類
        self.memory = ReplayMemory(CAPACITY) # 経験を記憶するメモリオブジェクトを生成

        #===  Dueling Neural Network を構築 ===
        n_in, n_mid, n_out    = num_states, num_hidden, num_actions
        self.main_q_network   = Net(n_in, n_mid, n_out)  # 学習させる DQN
        self.target_q_network = Net(n_in, n_mid, n_out)  # 教師データの作成時に利用する DQN
        #=== 最適化手法の設定 ===
        self.optimizer = optim.Adam(self.main_q_network.parameters(), lr=0.0001)

    def replay(self):
        '''Experience Replayでネットワークの結合パラメータを学習する。'''
        # メモリサイズがミニバッチより小さい間は何もしない
        if len(self.memory) < BATCH_SIZE:
            return
        # ミニバッチの作成 ('make_minibatch' で定義)
        self.batch, self.state_batch, self.action_batch, self.reward_batch, self.non_final_next_states = self.make_minibatch()
        # 教師信号となる Q(s_t, a_t) 値を求める。
        self.expected_state_action_values = self.get_expected_state_action_values()
        # 結合パラメータの更新
        self.update_main_q_network()

    def decide_action(self, state, episode):
        '''現在の状態に応じて、ε-greedy法を用いて行動を決定する。'''
        epsilon = 0.5 * (1 / (episode + 1))

        if epsilon <= np.random.uniform(0, 1):
            '''最適化行動'''
            self.main_q_network.eval()  # 推論モードに切り替え
            with torch.no_grad():
                action = self.main_q_network(state).max(1)[1].view(1, 1)
        else:
            '''ランダムチョイス'''
            action = torch.LongTensor(
                [[random.randrange(self.num_actions)]])

        return action

    def make_minibatch(self):
        '''ミニバッチの作成'''
        transitions = self.memory.sample(BATCH_SIZE)
        # 各変数をミニバッチに対応する形に変形
        batch = Transition(*zip(*transitions))
        # 型の変形 (Variable) にし、cat (=concatenates) で shape も修正。
        state_batch  = torch.cat(batch.state)
        action_batch = torch.cat(batch.action)
        reward_batch = torch.cat(batch.reward)
        non_final_next_states = torch.cat([s for s in batch.next_state if s is not None])
        return batch, state_batch, action_batch, reward_batch, non_final_next_states

    def get_expected_state_action_values(self):
        '''教師信号となる Q(s_t, a_t) 値を求める'''
        # ネットワークを推論モードに切り替える
        self.main_q_network.eval()
        self.target_q_network.eval()

        # ネットワークが出力した Q(s_t, a_t) を求めるが、実際に行った action の index に対応する Q値 のみを gather で抜き出す。
        self.state_action_values = self.main_q_network(self.state_batch).gather(1, self.action_batch)

        # max{Q(s_t+1, a)}値を求める。ただし、next_state があるかには注意する！
        # cartpole が done になっておらず、next_state があるかをチェックするインデックスマスクを作成
        non_final_mask = torch.ByteTensor(tuple(map(lambda s: s is not None, self.batch.next_state)))
        # まずは全部0にしておく
        next_state_values = torch.zeros(BATCH_SIZE)

        a_m = torch.zeros(BATCH_SIZE).type(torch.LongTensor)

        # 次の状態の最大 Q値:max{Q(s_t+1, a)} の 行動 a_max を Main Q-Network から求める
        a_m[non_final_mask] = self.main_q_network(self.non_final_next_states).detach().max(1)[1]

        # 次の状態があるものだけにフィルターし、size 32を整える。
        a_m_non_final_next_states = a_m[non_final_mask].view(-1, 1)

        # 次の状態があるものの、行動 a_max の Q値 を target Q-Network から求める
        next_state_values[non_final_mask] = self.target_q_network(
            self.non_final_next_states).gather(1, a_m_non_final_next_states).detach().squeeze()

        # Q(s_t, a_t) 値を、Q 学習の式から求める。これが、教師データとなる。
        expected_state_action_values = self.reward_batch + GAMMA * next_state_values

        return expected_state_action_values

    def update_main_q_network(self):
        '''結合パラメータの更新'''

        # ネットワークを訓練モードに切り替える
        self.main_q_network.train()

        # 損失関数を計算する（smooth_l1_loss = Huberloss）
        loss = F.smooth_l1_loss(self.state_action_values,
                                self.expected_state_action_values.unsqueeze(1))

        # 結合パラメータの更新
        self.optimizer.zero_grad()  # 勾配をリセット
        loss.backward()  # バックプロパゲーションを計算
        self.optimizer.step()  # 結合パラメータを更新

    def update_target_q_network(self):  # DDQNで追加
        '''Target Q-Network を学習させた Main Q-Network と同じにする'''
        self.target_q_network.load_state_dict(self.main_q_network.state_dict())

class Agent:
    def __init__(self, num_states, num_actions):
        '''課題の状態と行動の数を設定する'''
        self.brain = Brain(num_states, num_actions)  # エージェントが行動を決定するための頭脳を生成

    def update_q_function(self):
        '''Q関数を更新する'''
        self.brain.replay()

    def get_action(self, state, episode):
        '''行動を決定する'''
        action = self.brain.decide_action(state, episode)
        return action

    def memorize(self, state, action, state_next, reward):
        '''memoryオブジェクトに、state, action, state_next, rewardの内容を保存する'''
        self.brain.memory.push(state, action, state_next, reward)

    def update_target_q_function(self):
        '''Target Q-NetworkをMain Q-Networkと同じに更新'''
        self.brain.update_target_q_network()

class Environment:

    def __init__(self, ENV):
        self.env = gym.make(ENV)  # 実行する課題を設定
        num_states = self.env.observation_space.shape[0]  # 課題の状態を取得
        num_actions = self.env.action_space.n             # 課題の行動数を取得
        self.agent = Agent(num_states, num_actions)       # 環境内で行動するAgentを生成

    def run(self):
        '''実行'''
        episode_10_list = np.zeros(10)  # 10試行分の立ち続けたstep数を格納し、平均ステップ数を出力に利用
        complete_episodes = 0  # 195step以上連続で立ち続けた試行数
        episode_final = False  # 最後の試行フラグ
        frames = []  # 最後の試行を動画にするために画像を格納する変数

        for episode in range(NUM_EPISODES):
            observation = self.env.reset() # 環境の初期化

            state = observation  # 観測をそのまま状態 s として使用
            state = torch.from_numpy(state).type(torch.FloatTensor)
            state = torch.unsqueeze(state, 0) # size 4をsize 1x4に変換

            for step in range(MAX_STEPS):
                action = self.agent.get_action(state, episode)  # 行動を求める

                # 行動a_tの実行により、s_{t+1}とdoneフラグを求める
                observation_next, _, done, _ = self.env.step(action.item())

                # 次の状態から、報酬や episode の終了評価、next_state の設定を行う。
                if done:
                    state_next = None  # 次の状態はないので、Noneを格納
                    # 直近 10 episode の step 数リストに追加
                    episode_10_list = np.hstack(
                        (episode_10_list[1:], step + 1))

                    ''' 「ステップ数が 200 経過」 or 「一定角度以上」 → 「done=True」なので、どちらなのかの判断を行う。'''
                    if step < 195:
                        reward = torch.FloatTensor([-1.0])  # 途中でこけたら罰則として報酬-1を与える
                        complete_episodes = 0  # 連続成功記録をリセット
                    else:
                        reward = torch.FloatTensor([1.0])  # 立ったまま終了時は報酬1を与える
                        complete_episodes = complete_episodes + 1  # 連続記録を更新
                else:
                    reward = torch.FloatTensor([0.0])  # 普段は報酬0
                    state_next = observation_next  # 観測をそのまま状態とする
                    state_next = torch.from_numpy(state_next).type(torch.FloatTensor)  # numpy変数をPyTorchのテンソルに変換
                    state_next = torch.unsqueeze(state_next, 0)  # size 4 をsize 1x4 に変換

                # メモリに経験を追加
                self.agent.memorize(state, action, state_next, reward)

                # Experience ReplayでQ関数を更新する
                self.agent.update_q_function()

                # 観測の更新
                state = state_next

                # 終了時の処理
                if done:
                    print('%d Episode: Finished after %d steps：10試行の平均step数 = %.1lf' % (
                        episode, step + 1, episode_10_list.mean()))

                    # ２試行に1度、Target Q-Network を Main Q-Network と同じにコピーする
                    if(episode % 2 == 0):
                        self.agent.update_target_q_function()
                    break

            if episode_final is True:
                # 動画を保存と描画
                #display_frames_as_gif(frames)
                break

            # 10連続で200step経ち続けたら成功
            if complete_episodes >= 10:
                print('10回連続成功')
                episode_final = True  # 次の試行を描画を行う最終試行とする

if __name__ == "__main__":
    cartpole_env = Environment()
    cartpole_env.run()
