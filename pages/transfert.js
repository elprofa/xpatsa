import React,{useState, useEffect} from "react";
import TransferForm from "../components/transferFrom";
// import TransactionProvider from '../ContextAPI/TransactionContext'
 import {TestProvider} from '../ContextAPI/TestContext';

 import axios from 'axios';

const TransfertPage = (props) => {

  
  const user = { name: 'Tania', loggedIn: true }

  const [data,setData]=useState({videos:[]});
  const [ApiData,setApiData]=useState("");

  let reponse="";

  useEffect(()=>{
    const api=axios.create({
      baseURL:`https://data.fixer.io/api/latest?access_key=75743a764a2f10cc4d8ab0f08be20066&format=1`
    });
    api.get('/').then(res=>{
      setApiData(res.data.rates.EUR);
      
    });

    console.log(ApiData);
  });

  

  const [paysOrigine,setPaysOrigine]=useState("");
  const [PaysDestinatinataire,setPaysDestinataire]=useState("");
  const [BillingInformation,setBillingInformation]=useState("");

  const transaction = { 
    TrPaysOrigine: paysOrigine, 
    TrUpdatePaysOrigine:setPaysOrigine,
    TrPaysDestinataire: PaysDestinatinataire,
    TrUpdatePaysDestinataire:setPaysDestinataire,
    TrBillingInformation:BillingInformation,
    TrUpdateBillingInformation:setBillingInformation
  }


  return (
      <TestProvider value={transaction}>
        <TransferForm />
      </TestProvider>
  );
};

export default TransfertPage; 
