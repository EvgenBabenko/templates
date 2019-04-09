// @flow
import currency from "currency.js";
import { map } from "ramda";

export const formatCurrency = (value: number): string =>
  currency(value).format();

const formatCurrencyArr = (arr: Array<number>): Array<string> =>
  map(formatCurrency, arr);

export default formatCurrencyArr;
