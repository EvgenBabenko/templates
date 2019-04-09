import oddslib from "oddslib";

const convertToDecimal = (field, value) => {
  const odds = oddslib.from(field, value);
  return {
    decimal: odds.to("decimal"),
    fractional: odds.to("fractional"),
    moneyline: odds.to("moneyline"),
    hongKong: odds.to("hongKong"),
    indonesian: odds.to("indonesian"),
    malay: odds.to("malay"),
    impliedProbability: odds.to("impliedProbability") * 100
  };
};

export default convertToDecimal;

// *********** Convert to Decimal *********** //

/*const convertDecimalToDecimal = value => {
  if (value < 1) {
    console.error("Please input decimal odds of at least 1.00.");
    return false;
  }
  return value;
};

const convertFractionalToDecimal = value => {
  return value + 1;
};

const convertAmericanToDecimal = value => {
  if (value.charAt(0) === "+") value = value.substring(1);
  if (value < 100 && value > -100) {
    alert("Please input American odds greater than 100 or less than -100.");
    return false;
  }

  if (value >= 0) return value / 100 + 1;
  return -100 / value + 1;
};

const convertHongKongToDecimal = value => {
  if (value < 0) {
    alert("Please input Hong Kong odds of at least 0.00.");
    return false;
  }
  return value + 1;
};

const convertIndonesianToDecimal = value => {
  if (value >= 0) return value + 1;
  return -1 / value + 1;
};

const convertMalayToDecimal = value => {
  if (value === 0) {
    alert("Please enter a value between -1 and 1, but not zero.");
    return false;
  }

  if (value > 0) return value + 1;
  return -1 / value + 1;
};

const convertToDecimal = (value, field) => {
  let decimalOdd;
  if (field === "decimal") decimalOdd = convertDecimalToDecimal(value);
  if (field === "fractional") decimalOdd = convertFractionalToDecimal(value);
  if (field === "american") decimalOdd = convertAmericanToDecimal(value);
  if (field === "hongKong") decimalOdd = convertHongKongToDecimal(value);
  if (field === "indonesian") decimalOdd = convertIndonesianToDecimal(value);

  if (field === "malay") decimalOdd = convertMalayToDecimal(value);
  if (field === "probability") decimalOdd = value;
  return decimalOdd;
};*/
