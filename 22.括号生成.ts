/*
 * @lc app=leetcode.cn id=22 lang=typescript
 * @lcpr version=30201
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    // DFS 解法

    /*
    括号匹配的时候一定满足  path.length === n*2  leftCount === rightCount
    核心 ： 穷尽 path 可能性，在 path 长度未满足之前，根据其左右括号数量修改参数并进入递归
    部分条件下 同时满足  `leftCount < n`  以及 `rightCount < leftCount`，两者都会进入递归，
    分别走向 `及时左右括号匹配` ， `继续添加左括号嵌套` 两个分支
    */
    const result: string[] = [];
    function recursion(path: string = '', leftCount: number = 0, rightCount: number = 0) {
        // 命中匹配，推入 result 并结束后续拼接
        if (path.length === n * 2) {
            result.push(path);
            return;
        }
        // 判断左括号是否未满足数量，未满足添加左括号进入递归匹配
        if (leftCount < n) {
            recursion(path + '(', leftCount + 1, rightCount);
        }
        // 判断左右括号是否数量匹配，不满足添加右括号进入递归匹配
        if (rightCount < leftCount) {
            recursion(path + ')', leftCount, rightCount + 1);
        }
    }
    recursion();
    return result;
}
// @lc code=end

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
