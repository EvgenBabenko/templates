// @flow
import type { ValuesType, SelectionType } from "./calcAsianHandicap";

type ConvertedValues = {
  selection: SelectionType,
  odds: number,
  handicap: number,
  commission: number,
  stake: number,
  calcOption: string
};

const convertHandicapValues = (values: ValuesType): ConvertedValues => {
  const converted = {
    selection: values.selection,
    odds: Number(values.odds),
    handicap: Number(values.handicap),
    commission: Number(values.commission),
    stake: Number(values.stake),
    calcOption: values.calcOption
  };

  return converted;
};

export default convertHandicapValues;
