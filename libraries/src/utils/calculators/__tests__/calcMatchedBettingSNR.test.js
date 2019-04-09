import calcMatchedBettingSNR from "../calcMatchedBettingSNR";

describe("calcMatchedBettingSNR", () => {
  test("test case 1", () => {
    const values = {
      betAmount: 20,
      backOdds: 1.58,
      layOdds: 1.6,
      layCommission: 2
    };

    const res = {
      layStake: "7.34",
      profit: "7.19"
    };

    const result = calcMatchedBettingSNR(values);
    expect(result).toEqual(res);
  });

  test("test case 2", () => {
    const values = {
      betAmount: 153,
      backOdds: 1.87,
      layOdds: 1.45,
      layCommission: 3
    };

    const res = {
      layStake: "93.74",
      profit: "90.93"
    };

    const result = calcMatchedBettingSNR(values);
    expect(result).toEqual(res);
  });

  test("test case 3", () => {
    const values = {
      betAmount: 256.88,
      backOdds: 1.12,
      layOdds: 1.33,
      layCommission: 5
    };

    const res = {
      layStake: "24.08",
      profit: "22.88"
    };

    const result = calcMatchedBettingSNR(values);
    expect(result).toEqual(res);
  });
});
