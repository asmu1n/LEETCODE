/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
    const res: number[] = [];
    for (let i = 0; i <= rowIndex; i++) {
        res[i] = 1;
        /**
         * res[j-1]的值还没有覆盖所以还是上一行的
         * res[j] = res[j] + res[j-1] 也就相当于上一行的左右相加
         */
        for (let j = i - 1; j > 0; j--) {
            res[j] += res[j - 1];
        }
    }
    return res;
}
// @lc code=end
