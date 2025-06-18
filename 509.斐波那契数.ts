/*
 * @lc app=leetcode.cn id=509 lang=typescript
 * @lcpr version=
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
    const hashResult: number[] = [0, 1];
    // 递归计算，并设置缓存
    function calNum(index: number) {
        if (hashResult[index] || hashResult[index] === 0) {
            return hashResult[index];
        }
        // 未找到缓存值，递归计算并缓存
        hashResult[index] = calNum(index - 1) + calNum(index - 2);
        return hashResult[index];
    }
    return calNum(n);
}
// @lc code=end

/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 4\n
// @lcpr case=end

 */
