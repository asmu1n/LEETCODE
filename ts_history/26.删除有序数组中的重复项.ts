/*
 * @lc app=leetcode.cn id=26 lang=typescript
 * @lcpr version=
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    if(!(nums?.length>0)){
        return 0
    }
    // slowIndex 意味着完成去重过程的索引（slowIndex 及其之前的值都是唯一的）
    let slowIndex=0;
    // fastIndex 作为当前的遍历索引，意味着去重的进度
    for(let fastIndex = 1; fastIndex<nums.length;fastIndex++){
        const slowNum = nums[slowIndex];
        const fastNum =nums[fastIndex];
        // 发现两者数值不同时，去重索引前推，同时将异值放入该位置（即便两个索引挨着，也相当于自己赋值自己）
        if(slowNum!==fastNum){
            // 因为是唯一值，只有完成一次异值赋值才把 slowIndex 往前推一位。（这样能够保值在 slowIndex 及其之前的值都是唯一的，最后输出 slowIndex+1 也就是唯一值的数量）
            slowIndex++;
            nums[slowIndex] = fastNum;
        }
    }
    /**
     * 做一个比喻，fastIndex 就是前线，而 slowIndex 就是后勤，
     * fastIndex 在前面推战线，只有打下来的地方能安稳下来才能丢给 slowIndex 在后面管理补给
     */
    return slowIndex+1;
    
};
// @lc code=end



/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */

