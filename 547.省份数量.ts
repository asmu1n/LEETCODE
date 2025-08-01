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
            // 判断是否目标城市是否与该城市相连，且目标城市是否处理过
            if (isConnected[cityIndex][cityRelationIndex] === 1 && !visitedCity[cityRelationIndex]) {
                // 标记已处理，同时递归处理该城市与其他城市的相连关系
                visitedCity[cityIndex] = true;
                dfs(cityRelationIndex);
            }
        }
    }
    //! 遍历每一个城市，进行相连判断（若城市全部相连，在第一次执行时就会递归标记所有城市，只会执行一次）
    for (let cityIndex = 0; cityIndex < cityCount; cityIndex++) {
        // 判断城市是否标记过 (除了在这层 for 循环中，还会在递归判断某一城市连接网络时标记)
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
