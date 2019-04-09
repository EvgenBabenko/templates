import convertOdds from "../convertOdds";

const res = {
  decimal: 1.25,
  fractional: "1/4",
  moneyline: -400,
  hongKong: 0.25,
  indonesian: -4.0,
  malay: 0.25,
  impliedProbability: 80
};

describe("convertOdds", () => {
  test("should convert decimal value", () => {
    const result = convertOdds("decimal", 1.25);
    expect(result).toEqual(res);
  });
});
