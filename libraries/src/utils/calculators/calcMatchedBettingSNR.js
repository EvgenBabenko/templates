import currency from "currency.js";

const calcMatchedBettingSNR = values => {
  const { betAmount, backOdds, layOdds, layCommission } = values;
  const layCommissionPrc = layCommission / 100;

  const layStake = ((backOdds - 1) / (layOdds - layCommissionPrc)) * betAmount;
  const profit = (backOdds - 1) * betAmount - (layOdds - 1) * layStake;

  return {
    layStake: currency(layStake).format(),
    profit: currency(profit).format()
  };
};

export default calcMatchedBettingSNR;
