/*
 * @lc app=leetcode.cn id=76 lang=typescript
 * @lcpr version=30202
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
    // 目标子串长度 长于  目标字符串时提前结束
    if (s.length < t.length) {
        return '';
    }
    // 匹配目标
    const needs = new Map<string, number>();
    // 匹配目标初始化
    for (const char of t) {
        const prevVal = needs.get(char) || 0;
        needs.set(char, prevVal + 1);
    }
    // 匹配窗口内的值
    const window = new Map<string, number>();
    // 有效值
    let valid = 0;
    // 最短长度
    let minLength = s.length + 1;
    // 快指针
    let right = 0;
    // 慢指针
    let left = 0;
    // 匹配起始索引
    let start = 0;
    while (right < s.length) {
        // 扩大窗口
        const curChar = s[right];
        right++;
        // 检查是否需要的字符
        if (needs.has(curChar)) {
            const preValue = window.get(curChar) || 0;
            const nextValue = preValue + 1;
            window.set(curChar, nextValue);
            // 匹配成功递增有效值
            if (nextValue === needs.get(curChar)) {
                valid++;
            }
        }
        // 当窗口内部满足匹配需求时尝试收缩窗口
        while (valid === needs.size) {
            const curLength = right - left;
            // 记录最短长度和起始索引
            if (curLength < minLength) {
                start = left;
                minLength = curLength;
            }
            // 收缩窗口
            const startChar = s[left];
            const prevVal = window.get(startChar);
            if (prevVal) {
                const nextVal = prevVal - 1;
                window.set(startChar, nextVal);
                // 若去除的字符是匹配目标中的字符，且数量匹配，则有效值递减
                if (prevVal === needs.get(startChar)) {
                    valid--;
                }
            }
            left++;
        }
    }
    // 返回前还要判断是否找到
    return minLength === s.length + 1 ? '' : s.slice(start, start + minLength);
}
// @lc code=end

/*
// @lcpr case=start
// "ADOBECODEBANC"\n"ABC"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"a"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"aa"\n
// @lcpr case=end

 */
