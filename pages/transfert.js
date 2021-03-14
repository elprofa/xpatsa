import React,{useState, useEffect} from "react";
import TransferForm from "../components/transferFrom";
// import TransactionProvider from '../ContextAPI/TransactionContext'
 import {TestProvider} from '../ContextAPI/TestContext';

 import axios from 'axios';

const TransfertPage = (props) => {
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

  const user = { name: 'Tania', loggedIn: true }

  const [data,setData]=useState({videos:[]});

  useEffect(()=>{
    // const api=axios.create({
    //   baseURL:`https://data.fixer.io/api/latest?access_key=75743a764a2f10cc4d8ab0f08be20066&format=1`
    // });
    // api.get('/').then(res=>{
    //   console.log(res.data.rates)
    // });


    axios({
      url: 'https://data.fixer.io/api/latest?access_key=75743a764a2f10cc4d8ab0f08be20066&format=1',
      method: 'get',
      data: {
        query: `
          query PostsForAuthor {
            author(id: 1) {
              firstName
                posts {
                  title
                  votes
                }
              }
            }
          `
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }).then((result) => {
      console.log(result.data)
    });

  })

  return (
      <TestProvider value={transaction}>
        <TransferForm />
      </TestProvider>
  );
};

export default TransfertPage; 
