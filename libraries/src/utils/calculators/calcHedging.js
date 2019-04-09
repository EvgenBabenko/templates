function calcHedging(values) {
  const {
    backPrice,
    backStake,
    layPrice,
    backCommission,
    layCommission
  } = values;

  const cA2E = (backPrice - 1) * (1 - backCommission) + 1;
  const cA4E = layPrice - 1 + (1 - layCommission);
  const shouldLay = (cA2E / cA4E) * backStake;
  const backLiability = backStake;
  const backProfit = backStake * (cA2E - 1);
  const layLiability = shouldLay * (layPrice - 1);
  const layProfit = shouldLay * (1 - layCommission);
  const totalStaked = backLiability + layLiability;
  const guaranteedReturn = backLiability + backProfit;
  const guaranteeProfit = guaranteedReturn - totalStaked;

  return {
    shouldLay,
    totalStaked,
    guaranteeProfit,
    guaranteedReturn,
    backProfit,
    layLiability,
    layProfit,
    backLiability
  };
}

export default calcHedging;
