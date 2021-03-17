import axios from 'axios';

const key="75743a764a2f10cc4d8ab0f08be20066";

export const getRate = async (fc,oc,amount) => {
    const { data } = await axios.get(`https://data.fixer.io/api/convert?access_key=${key}&from=${fc}&to=${oc}&amount=${amount}`);
    // console.log(data.info.rate);
    return data.info.rate;
}

export const getResult = async (fc,oc,amount) => {
  const { data } = await axios.get(`https://data.fixer.io/api/convert?access_key=${key}&from=${fc}&to=${oc}&amount=${amount}`);
  // console.log(data.info.rate);
  return data.result;
}

export const calculateFromAmountReceived = (value, rate, percentage) =>
  Math.floor(value * rate.toFixed(3) * percentage);

 

export const calculateFees = (value, name, fromCurrency, toCurrency) => {
    let fees;
  
    if (fromCurrency === 'XAF' && toCurrency === 'MAD') {
      if (value <= 200000) {
        fees = 2500 + value * 0.075;
      } else if (value <= 400000) {
        fees = 4000 + value * 0.075;
      } else if (value <= 600000) {
        fees = 4000 + value * 0.07;
      } else if (value <= 1000000) {
        fees = 4000 + value * 0.065;
      } else {
        fees = 4000 + value * 0.0637;
      }
    } else {
      fees = value * 0.055;
    }
    return Math.floor(fees);
  }

  
export const airtelMoneyFees = (value) => {
  let fees;
  fees=(value*3)/100;
  return Math.floor(fees);
}
  
export const deductionFrais = (value) => {
  let fees;
  let amount;

  if (value <= 200000) {
    amount = (value-2500)/1.075;
  }
  else if (value <= 400000) {
    amount = (value-4000)/1.075;
  } 
  else if (value <= 600000) {
    amount = (value-4000)/1.070;
  }
  else if (value <= 1000000) {
    amount = (value-4000)/1.065;
  }
  else {
    amount = (value - 4000) / 1.0637;
  }

  return Math.floor(amount);
}

 export const calculateFromSentAmount = (value, name, rate) => {
    let amount;
  
    if (name === 'sent') {
      amount = value*rate;
    } else if (name === 'received') {
      amount = value / rate;
    } else if (name === 'total' && value <= 217000) {
      amount = (value - 2500) / 1.075;
    } else if (name === 'total' && value <= 434000) {
      amount = (value - 4000) / 1.075;
    } else if (name === 'total' && value <= 646000) {
      amount = (value - 4000) / 1.07;
    } else if (name === 'total' && value <= 1000000) {
      amount = (value - 4000) / 1.065;
    } else {
      amount = (value - 4000) / 1.0637;
    }
  
    return Math.floor(amount);
  }
  
  export const calculateTotal = (fees, value) => Number(fees) + Number(value);

  export const determinePercentage = (
    fromCurrency,
    toCurrency,
    percentageMad,
    percentageZar
  ) => {
    let percentage;
    if (fromCurrency === 'XAF' && toCurrency === 'MAD') {
      percentage = percentageMad;
    } else if (fromCurrency === 'F CFA' && toCurrency === 'Rand') {
      percentage = percentageZar;
    } else if (fromCurrency === 'Dhs' && toCurrency === 'F CFA') {
      percentage = percentageMad;
    } else if (fromCurrency === 'Dhs' && toCurrency === 'Rand') {
      percentage = percentageZar;
    } else if (fromCurrency === 'Rand' && toCurrency === 'Dhs') {
      percentage = percentageZar;
    } else {
      percentage = percentageZar;
    }
  
    return percentage;
  }

  export const determineRate = (
    fromCurrency,
    toCurrency,
    xafToMad,
    xafToRand,
    madToXaf,
    madToRand,
    zarToXaf,
    zarToMad
  ) => {
    let rate;
    if (fromCurrency === 'F CFA' && toCurrency === 'Dhs') {
      rate = xafToMad;
    } else if (fromCurrency === 'F CFA' && toCurrency === 'Rand') {
      rate = xafToRand;
    } else if (fromCurrency === 'Dhs' && toCurrency === 'F CFA') {
      rate = madToXaf;
    } else if (fromCurrency === 'Dhs' && toCurrency === 'Rand') {
      rate = madToRand;
    } else if (fromCurrency === 'Rand' && toCurrency === 'Dhs') {
      rate = zarToMad;
    } else {
      rate = zarToXaf;
    }
  
    return rate;
  }
  