# coding: utf-8
import numpy as np
import matplotlib.pyplot as plt
from sklearn.ensemble import BaggingRegressor
from sklearn.linear_model import LinearRegression

#=== 学習データ ===
N = 100
x = np.random.uniform(0, 1, N)
t = np.random.normal(np.sin(x*np.pi/2), 0.3)

N_TRAIN = 50 # 訓練データ数
x_train = x[:N_TRAIN]
t_train = t[:N_TRAIN]
x_test  = x[N_TRAIN:]
t_test  = t[N_TRAIN:]
#=== 学習データの図示 ===
plt.scatter(x_train, t_train, label='trainig', color='blue')
plt.scatter(x_test, t_test, label='test', color='red')
plt.legend()
plt.show()
#=== 弱学習器の数Mに対する精度の変化 ===
err = []
iteration = 100
for M in range(1, 10):
    m = 0
    for i in range(iteration):
        reg = BaggingRegressor(base_estimator=LinearRegression(), n_estimators=M)
        reg.fit(x_train.reshape(-1,1), t_train)
        m += np.average((reg.predict(x_test.reshape(-1,1)) - t_test)**2)
    err.append( m/iteration )
#=== 結果の図示 ===
plt.clf()
plt.title('mean squared error')
plt.ylabel('mse')
plt.xlabel('number of weak-learner (M)')
plt.plot(err)
plt.show()
