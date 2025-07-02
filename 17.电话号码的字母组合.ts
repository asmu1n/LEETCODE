/*
 * @lc app=leetcode.cn id=17 lang=typescript
 * @lcpr version=30201
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
    if (!digits) {
        return [];
    }
    // 数字和字母的对应关系
    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    const result: string[] = [];
    function loop(index: number, path: string[]) {
        // 当前路径已完成，插入路径
        if (index === digits.length) {
            result.push(path.join(''));
        } else {
            const charMap = phoneMap[digits[index]];
            for (const char of charMap) {
                // 推入当前遍历的字母进入 path 即（做出选择）
                path.push(char);
                loop(index + 1, path);
                // 做完选择后，我们要回撤上一步选择，然后再做另外的选择
                path.pop();
            }
        }
    }
    loop(0, []);
    return result;
}
// @lc code=end

/*
// @lcpr case=start
// "23"\n
// @lcpr case=end

// @lcpr case=start
// ""\n
// @lcpr case=end

// @lcpr case=start
// "2"\n
// @lcpr case=end

 */
