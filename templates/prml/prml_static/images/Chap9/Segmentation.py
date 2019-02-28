# coding:utf-8
import cv2
import numpy as np

if __name__ == "__main__":
    img = cv2.imread("img.png")
    X   = img.reshape(-1, 3).astype(float) # ２次元の画像を1次元の画素データ列にする。
    N   = len(X)  # 画素の数
    K   = 8       # クラスターの数
    mu  = X[np.random.choice(N,K),:] # 代表ベクトルの初期化(実画像からランダムに選択)
    cls = np.zeros(N,dtype=int) # どのクラスに割り当てたかを記録

    while True:
        #=== E step ===
        distance = [np.sum((X - mu[k,:])**2, axis=1) for k in range(K)] 
        cls = np.argmin(distance, axis=0) # E step
        #=== M step ===
        new_mu = np.array([X[cls == k].mean(0) for k in range(K)])
        #=== 代表ベクトルが動かなくなったら終了。 ===
        if max((np.sum((new_mu - mu)**2, axis=1))) < 1.0e-2:
            break
        mu = new_mu

    # 画素なので、データは整数の値を利用する。
    mu = new_mu.astype(int)

    # 代表ベクトルの色に塗り替える
    for k in range(K):
        X[cls == k] = mu[k]

    # 2次元の画像に戻し、保存。
    cv2.imwrite("segmented_img.png", X.reshape(img.shape))


    # どの色で画像が塗られているのかを見るためにカラーパレットを作成。
    palette = np.zeros((80000, 3))
    for k in range(K):
        palette[k*10000:(k+1)*10000] = mu[k]

    # 画像サイズを整え、保存。
    cv2.imwrite("palette.png", palette.reshape(400,200,3))