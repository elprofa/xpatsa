import React,{useState} from "react";
import TransferForm from "../components/transferFrom";
// import TransactionProvider from '../ContextAPI/TransactionContext'
 import {TestProvider} from '../ContextAPI/TestContext'

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

  return (
      <TestProvider value={transaction}>
        <TransferForm />
      </TestProvider>
  );
};

export default TransfertPage;
