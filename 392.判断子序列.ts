/*
 * @lc app=leetcode.cn id=392 lang=typescript
 * @lcpr version=30201
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
    const sList = s.split('');
    let min_index = 0;
    for (const s_char of sList) {
        const matchIndex = t.indexOf(s_char, min_index);
        // 不存在
        if (matchIndex === -1) {
            return false;
        }
        min_index = matchIndex + 1;
    }
    return true;
}
// @lc code=end

/*
// @lcpr case=start
// "abc"\n"ahbgdc"\n
// @lcpr case=end

// @lcpr case=start
// "axc"\n"ahbgdc"\n
// @lcpr case=end

 */
