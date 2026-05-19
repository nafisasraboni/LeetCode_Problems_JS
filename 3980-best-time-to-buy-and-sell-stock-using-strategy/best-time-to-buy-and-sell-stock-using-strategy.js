/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 */
var maxProfit = function(prices, strategy, k) {
    const n = prices.length;

    const oldPrefix = new Array(n + 1).fill(0);
    const pricePrefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        oldPrefix[i + 1] = oldPrefix[i] + prices[i] * strategy[i];
        pricePrefix[i + 1] = pricePrefix[i] + prices[i];
    }

    let originalProfit = oldPrefix[n];
    let bestGain = 0;

    for (let start = 0; start + k <= n; start++) {
        let mid = start + k / 2;
        let end = start + k;

        let oldProfit = oldPrefix[end] - oldPrefix[start];
        let newProfit = pricePrefix[end] - pricePrefix[mid];

        bestGain = Math.max(bestGain, newProfit - oldProfit);
    }

    return originalProfit + bestGain;
};