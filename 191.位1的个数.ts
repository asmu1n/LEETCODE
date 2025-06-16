/*
 * @lc app=leetcode.cn id=191 lang=typescript
 * @lcpr version=30201
 *
 * [191] 位1的个数
 */

// @lc code=start
function hammingWeight(n: number): number {
    let res = 0;
    while (n !== 0) {
        n = n & (n - 1);
        res++;
    }
    return res;
}
// @lc code=end

/*
// @lcpr case=start
// 11\n
// @lcpr case=end

// @lcpr case=start
// 128\n
// @lcpr case=end

// @lcpr case=start
// 2147483645\n
// @lcpr case=end

 */
