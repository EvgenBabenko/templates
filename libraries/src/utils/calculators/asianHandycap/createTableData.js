// @ flow
import currency from "currency.js";
import formatCurrencyArr, { formatCurrency } from "./formatCurrencyArr";
import determineResult from "./determineResult";
import determinePayout from "./determintPayout";

function displayOutput(
  odds: number,
  handicap: number,
  myMod: number,
  margin: number,
  wager: number,
  diff: number
) {
  // Calculate for specific scoreline
  diff = -diff;

  if (myMod === 0) {
    const result = determineResult(diff, handicap, myMod);
    const payout = formatCurrency(
      determinePayout(diff, handicap, myMod, odds, margin, wager)
    );
    const profit = formatCurrency(payout - wager);
    // Create arrays for output data consistency
    return {
      result: [result],
      payout: [payout],
      profit: [profit]
    };
  }

  const h_payout = [];
  const h_wager = wager / 2;

  const h_handicap = [handicap + 0.25, handicap - 0.25, handicap];
  const h_myMod = [(h_handicap[0] * 4) % 2, (h_handicap[1] * 4) % 2, myMod];
  const h_result = [
    determineResult(diff, h_handicap[0], h_myMod[0]),
    determineResult(diff, h_handicap[1], h_myMod[1]),
    determineResult(diff, h_handicap[2], h_myMod[2])
  ];

  h_payout[0] = determinePayout(
    diff,
    h_handicap[0],
    h_myMod[0],
    odds,
    margin,
    h_wager
  );
  h_payout[1] = determinePayout(
    diff,
    h_handicap[1],
    h_myMod[1],
    odds,
    margin,
    h_wager
  );
  h_payout[2] = determinePayout(diff, handicap, myMod, odds, margin, wager);

  const h_profit = [
    h_payout[0] - h_wager,
    h_payout[1] - h_wager,
    h_payout[2] - wager
  ];

  return {
    handicap: h_handicap,
    wager: [
      currency(h_wager).format(),
      currency(h_wager).format(),
      currency(wager).format()
    ],
    result: h_result,
    payout: formatCurrencyArr(h_payout),
    profit: formatCurrencyArr(h_profit)
  };
}

export default displayOutput;
