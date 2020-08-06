---
marp: true
---

# 问题 2

简单图 $G$ 中，如果 $m>\frac{1}{2}(n-1)(n-2)$，证明 $G$ 不存在孤立节点。

**证明：** 若不然，则有一孤立点 $v$，子图 $G'=G-v$ 的边数

$$
%ls
    \left\lvert E(G')\right\rvert = \left\lvert E(G)\right\rvert = m>\frac{1}{2}(n-1)(n-2) 
$$

---

然而，$G'$ 边数最多的情况是完全图 $K_{n-1}$，也就是
$$
%lss
    \left\lvert E(G')\right\rvert \leq \frac{1}{2}(n-1)(n-2)
$$

这与第一个式子矛盾。

由于当孤立节点数不止一个时，第二个式子依然成立。所以不存在孤立节点。
