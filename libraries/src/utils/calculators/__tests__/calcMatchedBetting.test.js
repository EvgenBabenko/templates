import calcMatchedBetting from "../calcMatchedBetting";

describe("calcMatchedBetting", () => {
  test("test case 1", () => {
    const values = {
      betAmount: 20,
      backOdds: 1.58,
      layOdds: 1.6,
      layCommission: 2
    };

    const res = {
      layStake: "20.00",
      profit: "19.60"
    };

    const result = calcMatchedBetting(values);
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
      layStake: "201.49",
      profit: "195.44"
    };

    const result = calcMatchedBetting(values);
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
      layStake: "224.77",
      profit: "213.53"
    };

    const result = calcMatchedBetting(values);
    expect(result).toEqual(res);
  });
});
