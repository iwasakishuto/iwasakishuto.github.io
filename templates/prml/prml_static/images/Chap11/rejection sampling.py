# coding: utf-8
import numpy as np
from scipy import stats
import matplotlib.pyplot as plt

def p(z):
    '''目標とする分布'''
    return 1-abs(z)

def rejection_sample():
    '''棄却サンプリング'''
    global N_gen
    while True:
        N_gen += 1
        z = 2 * np.random.beta(2,2) - 1 # ベータ分布からサンプリング
        u = np.random.uniform(0, k*stats.beta.pdf(z, 2, 2, loc=-1, scale=2)) # kq(z)上で一様分布
        if u <= p(z):
            return z

#=== パラメータ ===
k = 2
N = 10000
N_gen = 0

if __name__ == "__main__":
    # 以下によって、ベータ分布と目標分布を図示できる。
    Z = np.linspace(-1, 1, 100)
    P = np.vectorize(p)(x)
    plt.plot(Z, P, label="p(z)")
    plt.plot(Z, k*stats.beta.pdf(Z, 2, 2, loc=-1, scale=2), label="beta(2,2) * %.1f" % M)
    plt.ylim(0, 2)
    plt.legend()
    plt.show()

    #=== rejection sampling ===
    samples = np.array([rejection_sample() for i in range(N)])
    plt.plot(Z, P, label="p ( x ) ")
    plt.hist(samples, bins=50, density=True, alpha=0.3, label="rejection sample")
    plt.legend()
    plt.show()
    print("total number of samples = %d" % N_gen)
    print("adoption rate = %.2f" % (N/N_gen))
