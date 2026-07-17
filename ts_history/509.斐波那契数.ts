/*
 * @lc app=leetcode.cn id=509 lang=typescript
 * @lcpr version=
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
    // 去重递归
    // const hashResult: number[] = [0, 1];
    // // 递归计算，并设置缓存
    // function calNum(index: number) {
    //     if (hashResult[index] || hashResult[index] === 0) {
    //         return hashResult[index];
    //     }
    //     // 未找到缓存值，递归计算并缓存
    //     hashResult[index] = calNum(index - 1) + calNum(index - 2);
    //     return hashResult[index];
    // }
    // return calNum(n);

    // 双指针迭代
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    // 计算下一位值，需要当前值加前一个值即可，因此只记录两个值不断迭代到所求的索引，以此求出所需的值
    // 记录初始值(0,1)
    let low = 0;
    let high = 1;
    // 迭代到所求的索引处
    for (let i = 2; i <= n; i++) {
        // 计算出下一位
        const sum = low + high;
        // 数值位移，继续推进求值
        low = high;
        high = sum;
    }
    return high;
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
