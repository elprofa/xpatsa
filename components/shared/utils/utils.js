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