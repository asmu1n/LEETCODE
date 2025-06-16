/*
 * @lc app=leetcode.cn id=1 lang=typescript
 * @lcpr version=
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map = new Map()
    for(let i =0;i<nums.length;i++){
        const curNum = nums[i];
        const needNum = target - curNum;
        const patterIndex = map.get(needNum)
        if(patterIndex || patterIndex ===0){
            return [patterIndex,i]
        }else{
            map.set(curNum,i)
        }
    }
    
};
// @lc code=end



/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */

