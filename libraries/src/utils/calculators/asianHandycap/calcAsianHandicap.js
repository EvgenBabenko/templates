// @flow
import createTableData from "./createTableData";
import convertHandicapValues from "./convertHandicupValues";

export type SelectionType = "home" | "away";

type SpecificScopeType = {
  homeScope: string,
  awayScope: string
};

export type ValuesType = {
  selection: SelectionType,
  odds: string,
  handicap: string,
  commission: string,
  stake: string,
  calcOption: string,
  specificScore: ?SpecificScopeType
};

const calcAsianHandicap = (values: ValuesType): any => {
  const converted = convertHandicapValues(values);
  const {
    selection,
    odds,
    handicap,
    commission,
    stake,
    calcOption
  } = converted;

  const myMod = (handicap * 4) % 2;

  // calculate specific final scope
  if (calcOption === "specific" && values.specificScore) {
    const { homeScope, awayScope } = values.specificScore;
    const homeScopeNb = Number(homeScope);
    const awayScopeNb = Number(awayScope);

    let diff =
      selection === "home"
        ? homeScopeNb - awayScopeNb
        : awayScopeNb - homeScopeNb;
    diff = -diff;

    return [
      {
        title: "",
        table: createTableData(odds, handicap, myMod, commission, stake, diff)
      }
    ];
  }

  // calculate all scenarios
  const ending = handicap.toString().slice(-2);
  const diffScenarios = [];

  if (ending === "50") {
    diffScenarios[0] = Math.floor(handicap);
    diffScenarios[1] = Math.floor(handicap) + 1;
  } else if (ending === "00") {
    diffScenarios[0] = handicap - 1;
    diffScenarios[1] = handicap;
    diffScenarios[2] = handicap + 1;
  } else {
    diffScenarios[0] = Math.round(handicap) - 1;
    diffScenarios[1] = Math.round(handicap);
    diffScenarios[2] = Math.round(handicap) + 1;
  }

  const myTeam = selection === "home" ? "Home team" : "Away team";

  const data = diffScenarios.map((item, index, array) => {
    let title = "";
    const isFirst = index === 0;
    const isLast = index === array.length - 1;
    const goals = Math.abs(item);
    const s = goals !== 1 ? "s" : "";
    const isDraw = item === 0;
    const isWin = item < 0;
    const isLoss = item > 0;

    if (isDraw) {
      title = "Game ends in a draw";
      if (isFirst) title = `${title} or the ${myTeam} wins`;
      if (isLast) title = `${title} or the ${myTeam} loses`;
    }
    if (isWin) {
      title = `${myTeam} wins by ${goals} goal${s}`;
      if (isFirst) title = `${title} or more`;
      if (isLast) title = `${title} or less`;
    }
    if (isLoss) {
      title = `${myTeam} loses by ${goals} goal${s}`;
      if (isFirst) title = `${title} or less`;
      if (isLast) title = `${title} or more`;
    }

    const output = createTableData(
      odds,
      handicap,
      myMod,
      commission,
      stake,
      item
    );

    return { title, table: output };
  });

  return data;
};

export default calcAsianHandicap;
