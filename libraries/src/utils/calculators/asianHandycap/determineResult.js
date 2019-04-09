// @flow
function determineResult(
  diff: number,
  handicap: number,
  myMod: number
): string {
  const sum = diff + handicap;

  if (myMod === 0) {
    if (sum > 0) return "Win";
    if (sum === 0) return "Push";
    return "Lose";
  } else {
    const compareUp = sum + 0.25;
    const compareDown = sum - 0.25;
    if (compareUp > 0 && compareDown > 0) return "Win";
    if (compareUp < 0 && compareDown < 0) return "Lose";
    if (compareUp > 0 && compareDown === 0) return "Half Win";
    return "Half Lose";
  }
}

export default determineResult;
