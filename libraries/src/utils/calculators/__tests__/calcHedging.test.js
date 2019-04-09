import calcHedging from "../calcHedging";

test("calcHedging", () => {
  const values = {
    backPrice: 1.55,
    backStake: 20,
    layPrice: 1.33,
    backCommission: 0.065,
    layCommission: 0.034
  };

  const res = {
    shouldLay: 23.368055555555557,
    totalStaked: 27.711458333333336,
    guaranteeProfit: 2.5735416666666673,
    guaranteedReturn: 30.285000000000004,
    backProfit: 10.285000000000002,
    layLiability: 7.7114583333333355,
    layProfit: 22.573541666666667,
    backLiability: 20
  };

  const result = calcHedging(values);
  expect(result).toEqual(res);
});
