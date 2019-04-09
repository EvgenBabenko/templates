// @flow
function determinePayout(
  diff: number,
  handicap: number,
  myMod: number,
  odds: number,
  margin: number,
  wager: number
) {
  const sum = diff + handicap;

  if (myMod === 0) {
    if (sum > 0) return wager + wager * (odds - 1) * (1 - margin);
    if (sum === 0) return wager;
    return 0;
  }

  const compareUp = sum + 0.25;
  const compareDown = sum - 0.25;
  if (compareUp > 0 && compareDown > 0) {
    return wager + wager * (odds - 1) * (1 - margin);
  }
  if (compareUp < 0 && compareDown < 0) return 0;
  if (compareUp > 0 && compareDown === 0) {
    return wager + 0.5 * wager * (odds - 1) * (1 - margin);
  }
  return wager / 2;
}

export default determinePayout;
