import currency from "currency.js";

const calcMatchedBetting = values => {
  const { betAmount, backOdds, layOdds, layCommission } = values;
  const layCommissionPrc = layCommission / 100;

  const layStake = (backOdds / (layOdds - layCommissionPrc)) * betAmount;
  const profit = betAmount + (layStake * (1 - layCommissionPrc) - betAmount);

  return {
    layStake: currency(layStake).format(),
    profit: currency(profit).format()
  };
};

export default calcMatchedBetting;
