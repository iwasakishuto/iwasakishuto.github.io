```python
import numpy as np
import matplotlib.pyplot as plt

mu = 0.6          # μ(確率)
n  = 100          # 一度の試行で行う回数
N_samples = 10000 # 試行の回数
x = np.random.binomial(n, mu, N_samples)

plt.hist(x, bins=100)
plt.show()
```
