import calcAsianHandicap from "../asianHandycap/calcAsianHandicap";

describe("[calcAsianHandicap] Calculate Asian Handicap", () => {
  test("Check specific final scope (flexible table)", () => {
    const values = {
      selection: "home",
      odds: "1.9",
      handicap: "-0.75",
      commission: "0.05",
      stake: "25.00",
      calcOption: "specific",
      specificScore: {
        homeScope: "2",
        awayScope: "1"
      }
    };

    const res = [
      {
        title: "",
        table: {
          handicap: [-0.5, -1, -0.75],
          payout: ["23.19", "12.50", "35.69"],
          profit: ["10.69", "0.00", "10.69"],
          result: ["Win", "Push", "Half Win"],
          wager: ["12.50", "12.50", "25.00"]
        }
      }
    ];

    const result = calcAsianHandicap(values);
    expect(result).toEqual(res);
  });

  test("Check all scenarios (flexible table)", () => {
    const values = {
      selection: "away",
      odds: "1.33",
      handicap: "-4.00",
      commission: "0.05",
      stake: "25.00",
      calcOption: "specific",
      specificScore: {
        homeScope: "2",
        awayScope: "1"
      }
    };

    const res = [
      {
        title: "",
        table: {
          payout: ["0.00"],
          profit: ["-25.00"],
          result: ["Lose"]
        }
      }
    ];

    const result = calcAsianHandicap(values);
    expect(result).toEqual(res);
  });

  test("test case 3", () => {
    const values = {
      selection: "away",
      odds: "1.33",
      handicap: "-0.75",
      commission: "0.07",
      stake: "100.00",
      calcOption: "all"
    };

    const res = [
      {
        title: "Away team wins by 2 goals or more",
        table: {
          handicap: [-0.5, -1, -0.75],
          wager: ["50.00", "50.00", "100.00"],
          result: ["Win", "Win", "Win"],
          payout: ["65.35", "65.35", "130.69"],
          profit: ["15.35", "15.35", "30.69"]
        }
      },
      {
        title: "Away team wins by 1 goal",
        table: {
          handicap: [-0.5, -1, -0.75],
          wager: ["50.00", "50.00", "100.00"],
          result: ["Win", "Push", "Half Win"],
          payout: ["65.35", "50.00", "115.35"],
          profit: ["15.35", "0.00", "15.35"]
        }
      },
      {
        title: "Game ends in a draw or the Away team loses",
        table: {
          handicap: [-0.5, -1, -0.75],
          wager: ["50.00", "50.00", "100.00"],
          result: ["Lose", "Lose", "Lose"],
          payout: ["0.00", "0.00", "0.00"],
          profit: ["-50.00", "-50.00", "-100.00"]
        }
      }
    ];

    const result = calcAsianHandicap(values);
    expect(result).toEqual(res);
  });

  test("Check all scenarios (simple table)", () => {
    const values = {
      selection: "home",
      odds: "1.33",
      handicap: "-4.00",
      commission: "0.07",
      stake: "100.00",
      calcOption: "all"
    };

    const res = [
      {
        title: "Home team wins by 5 goals or more",
        table: {
          result: ["Win"],
          payout: ["130.69"],
          profit: ["30.69"]
        }
      },
      {
        title: "Home team wins by 4 goals",
        table: {
          result: ["Push"],
          payout: ["100.00"],
          profit: ["0.00"]
        }
      },
      {
        title: "Home team wins by 3 goals or less",
        table: {
          result: ["Lose"],
          payout: ["0.00"],
          profit: ["-100.00"]
        }
      }
    ];

    const result = calcAsianHandicap(values);
    expect(result).toEqual(res);
  });
});
