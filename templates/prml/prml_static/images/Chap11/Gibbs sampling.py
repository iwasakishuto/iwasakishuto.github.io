# coding: utf-8
from math import gamma
import numpy as np
import matplotlib.pyplot as plt

def π(X):
    '''目標分布'''
    if X[0] + X[1] > 1: # 定義域から外の領域。
        return -0.1
    # ディリクレ分布の正則化項。積分公式より証明可能。
    z = sum([gamma(x) for x in a])/gamma(sum(a))
    return X[0]**a[0] * X[1]**a[1] * (1-X[0]-X[1])**a[2] / z

class Gibbs():
    def __init__(self, z, p):
        self.x = z[0] # 初期 x座標
        self.y = z[1] # 初期 y座標
        self.p = p    # 目標の分布

    def sample(self):
        '''一変数ずつ固定してサンプリング'''
        self.x = np.random.beta(a[0]+1, a[2]+1)*(1-self.y) # 前回のyで固定してπ(x|y)からサンプリング
        self.y = np.random.beta(a[1]+1, a[2]+1)*(1-self.x) # 求めたxで固定してπ(y|x)からサンプリング
        return [self.x, self.y]

BURNIN = 500
N = 1000
X = np.array([0, 0]) # 初期値
a = [3,2,5] # a,b,c の値

if __name__ == "__main__":
    z = np.array([0, 0]) # 初期値
    Gibbs_sampler = Gibbs(z, π)

    Sample = []
    for i in range(N):
        Sample.append(Gibbs_sampler.sample())

    burnin_x = np.array(Sample)[:BURNIN, 0]
    burnin_y = np.array(Sample)[:BURNIN, 1]
    sample_x = np.array(Sample)[BURNIN:, 0]
    sample_y = np.array(Sample)[BURNIN:, 1]

    plt.xlim(0, 1)
    plt.ylim(0, 1)
    X, Y = np.meshgrid(np.linspace(0, 1, 100), np.linspace(0, 1, 100))
    Z = np.vectorize(lambda x,y: π([x,y]))(X, Y)
    plt.pcolor(X, Y, Z, alpha=0.3)
    plt.scatter(sample_x, sample_y, label="sampling", s=10)
    plt.title("Dirichlet distribution a=%s" % a)
    plt.legend(loc=1)
    plt.show()
