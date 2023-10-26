/*

    You are given an array prices where prices[i] is the price of a given stock on the ith day.

    You want to maximize your profit by choosing a single day to buy one stock and choosing a different
    day in the future to sell that stock.

    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

    Leetcode problem https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

*/

function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0;
  let maxProfit = 0;
  let buyingDay = 0;
  let sellingDay = 1;

  while (sellingDay < prices.length) {
    if (prices[buyingDay] > prices[sellingDay]) {
      buyingDay = sellingDay;
    } else {
      let profit = prices[sellingDay] - prices[buyingDay];
      profit = profit < 0 ? 0 : profit;
      maxProfit = Math.max(profit, maxProfit);
    }
    sellingDay++;
  }

  return maxProfit;
}
