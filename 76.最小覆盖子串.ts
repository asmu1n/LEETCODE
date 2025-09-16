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
        const curChar = s[right];
        right++;
        if (needs.has(curChar)) {
            const preValue = window.get(curChar) || 0;
            const nextValue = preValue + 1;
            window.set(curChar, nextValue);
            if (nextValue === needs.get(curChar)) {
                valid++;
            }
        }
        while (valid === needs.size) {
            const curLength = right - left;
            if (curLength < minLength) {
                start = left;
                minLength = curLength;
            }
            const startChar = s[left];
            const prevVal = window.get(startChar);
            if (prevVal) {
                const nextVal = prevVal - 1;
                window.set(startChar, nextVal);
                if (prevVal === needs.get(startChar)) {
                    valid--;
                }
            }
            left++;
        }
    }
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
