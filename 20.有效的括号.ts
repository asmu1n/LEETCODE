/*
 * @lc app=leetcode.cn id=20 lang=typescript
 * @lcpr version=30201
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    if (s.length % 2 !== 0) {
        return false;
    }
    // 定义左栈字典表
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const leftStack: string[] = [];
    for (const currChar of s) {
        // 判断是否推到左栈
        if (currChar === '(' || currChar === '{' || currChar === '[') {
            leftStack.push(currChar);
        } else {
            // 识别到右栈内容，判断是否能与左栈内最新匹配
            if (leftStack.length !== 0 && map[leftStack[leftStack.length - 1]] === currChar) {
                leftStack.pop();
            } else {
                // 匹配的上就左栈弹出，不然直接返回 false
                return false;
            }
        }
    }
    // 左栈内容全弹出了说明全匹配的上
    return leftStack.length === 0;
}
// @lc code=end

/*
// @lcpr case=start
// "()"\n
// @lcpr case=end

// @lcpr case=start
// "()[]{}"\n
// @lcpr case=end

// @lcpr case=start
// "(]"\n
// @lcpr case=end

// @lcpr case=start
// "([])"\n
// @lcpr case=end

 */
