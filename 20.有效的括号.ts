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
    // 遇到左侧括号就压入左栈，遇到右侧括号就检测与左栈最后一个元素是否匹配，匹配就消除弹出左栈元素，否则提前结束判断直接断定为 false
    for (const currChar of s) {
        // 判断是否压入到左栈
        if (currChar === '(' || currChar === '{' || currChar === '[') {
            leftStack.push(currChar);
        } else {
            // 识别到右侧括号，判断是否能与左栈内最新匹配
            if (leftStack.length !== 0 && map[leftStack[leftStack.length - 1] as keyof typeof map] === currChar) {
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
