/*
 * @lc app=leetcode.cn id=547 lang=typescript
 * @lcpr version=30202
 *
 * [547] 省份数量
 */

// @lc code=start
function findCircleNum(isConnected: number[][]): number {
    // 深度优先
    let result = 0;
    const cityCount = isConnected.length;
    const visitedCity: boolean[] = [];
    function dfs(cityIndex: number) {
        for (let cityRelationIndex = 0; cityRelationIndex < cityCount; cityRelationIndex++) {
            if (isConnected[cityIndex][cityRelationIndex] === 1 && !visitedCity[cityRelationIndex]) {
                visitedCity[cityIndex] = true;
                dfs(cityRelationIndex);
            }
        }
    }
    for (let cityIndex = 0; cityIndex < cityCount; cityIndex++) {
        if (!visitedCity[cityIndex]) {
            dfs(cityIndex);
            result++;
        }
    }
    return result;
}
// @lc code=end

/*
// @lcpr case=start
// [[1,1,0],[1,1,0],[0,0,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,0,0],[0,1,0],[0,0,1]]\n
// @lcpr case=end

 */
