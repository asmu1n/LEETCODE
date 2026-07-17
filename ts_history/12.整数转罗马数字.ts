/*
 * @lc app=leetcode.cn id=12 lang=typescript
 * @lcpr version=30201
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
function intToRoman(num: number): string {
    let n = num;
    let str = '';
    const charMap = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };
    const repeat = [1, 10, 100, 1000];
    while (n > 0) {
        // for (const key in charMap) {
        //     const k = Number(key);
        //     if (n >= k) {
        //         str += repeat.includes(k) ? charMap[key].repeat(n / k) : charMap[key];
        //         n -= k;
        //     }
        // }
        if (n >= 1000) {
            str += charMap[1000].repeat(n / 1000);
            n = n % 1000;
        } else if (n >= 900) {
            str += charMap[900];
            n -= 900;
        } else if (n >= 500) {
            str += charMap[500];
            n -= 500;
        } else if (n >= 400) {
            str += charMap[400];
            n -= 400;
        } else if (n >= 100) {
            str += charMap[100].repeat(n / 100);
            n = n % 100;
        } else if (n >= 90) {
            str += charMap[90];
            n -= 90;
        } else if (n >= 50) {
            str += charMap[50];
            n -= 50;
        } else if (n >= 40) {
            str += charMap[40];
            n -= 40;
        } else if (n >= 10) {
            str += charMap[10].repeat(n / 10);
            n = n % 10;
        } else if (n === 9) {
            str += charMap[9];
            n = 0;
        } else if (n >= 5) {
            str += charMap[5];
            n -= 5;
        } else if (n === 4) {
            str += charMap[4];
            n = 0;
        } else {
            str += charMap[1].repeat(n);
            n = 0;
        }
    }
    return str;
}
// @lc code=end

/*
// @lcpr case=start
// 3749\n
// @lcpr case=end

// @lcpr case=start
// 58\n
// @lcpr case=end

// @lcpr case=start
// 1994\n
// @lcpr case=end

 */
