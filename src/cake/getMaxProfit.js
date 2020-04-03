/**
 * Calculate the max profit
 * @param {*} stockPrices
 */
export function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error("not possible");
  }

  let lowestPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    const possibleProfit = currentPrice - lowestPrice;

    lowestPrice = Math.min(lowestPrice, stockPrices[i]);
    maxProfit = Math.max(maxProfit, possibleProfit);
  }

  return maxProfit;
}
