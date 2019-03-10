# coding: utf-8
import numpy as np
from scipy import linalg as LA
import matplotlib.pyplot as plt

def p(z):
    '''目標となる分布 p(z)'''
    mu = np.array([0, 0]) # 平均
    S  = np.array([[1, 0.5],[0.5, 1]]) # 分散
    S_inv = LA.inv(S) # 逆行列
    det_S = LA.det(S) # 行列式
    return np.exp(-(z-mu).T.dot(S_inv).dot(z-mu)/2) / (2 * np.pi * np.sqrt(det_S))

class MH():
    def __init__(self, z, p):
        self.z = z # 初期座標
        self.p = p # 目標の分布

    def sample(self):
        '''棄却サンプリング'''
        while True:
            new_z = self.z + np.random.normal(0,1,2)
            if np.random.uniform() <= min( self.p(new_z)/self.p(self.z), 1):
                self.z = new_z
                return self.z

#=== パラメータ ===
BURNIN = 300
N = 1000

if __name__ == "__main__":
    z = np.array([2, -2])
    MH_sampler = MH(z, p)

    Sample = []
    for i in range(N):
        Sample.append(MH_sampler.sample())

    burnin_x = np.array(Sample)[:BURNIN, 0]
    burnin_y = np.array(Sample)[:BURNIN, 1]
    sample_x = np.array(Sample)[BURNIN:, 0]
    sample_y = np.array(Sample)[BURNIN:, 1]

    #=== サンプルの動き ===
    plt.xlim(-3, 3)
    plt.ylim(-3, 3)
    X, Y = np.meshgrid(np.linspace(-3, 3, 100), np.linspace(-3, 3, 100))
    Z = np.vectorize(lambda x,y: p([x,y]))(X, Y)
    plt.pcolor(X, Y, Z, alpha=0.3)
    plt.plot(burnin_x[:30], burnin_y[:30], label="burn-in", linewidth = 1.0, alpha=0.7)
    plt.plot(burnin_x[30:60], burnin_y[30:60], label="sampling", linewidth = 1.0, alpha=0.7)
    plt.legend()
    plt.show()

    #=== サンプルの分布 ===
    plt.xlim(-3, 3)
    plt.ylim(-3, 3)
    X, Y = np.meshgrid(np.linspace(-3, 3, 100), np.linspace(-3, 3, 100))
    Z = np.vectorize(lambda x,y: p([x,y]))(X, Y)
    plt.pcolor(X, Y, Z, alpha=0.3)
    plt.scatter(burnin_x, burnin_y, label="burn-in",  s=10)
    plt.scatter(sample_x, sample_y, label="sampling", s=10)
    plt.legend()
    plt.show()
