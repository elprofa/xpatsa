import React, { useState, useEffect } from "react";
import TransferForm from "../components/transferFrom";
// import TransactionProvider from '../ContextAPI/TransactionContext'
import { TestProvider } from "../ContextAPI/TestContext";

const TransfertPage = (props) => {
  const user = { name: "Tania", loggedIn: true };

  const [data, setData] = useState({ videos: [] });
  const [ApiData, setApiData] = useState("");

  let reponse = "";

  const [paysOrigine, setPaysOrigine] = useState("");
  const [PaysDestinatinataire, setPaysDestinataire] = useState("");
  const [BillingInformation, setBillingInformation] = useState("");
  const [rate, setRate] = useState("");
  const [fees, setFees] = useState("");
  const [total, setTotal] = useState("");
  const [currFrom, setCurrFrom] = useState("");
  const [currTo, setCurrTo] = useState("");
  const [amountSent, setAmountSent] = useState("0");
  const [amountReceived, setAmountReceived] = useState("1");
  const [amFee, setAmFee] = useState("");

  const transaction = {
    TrPaysOrigine: paysOrigine,
    TrUpdatePaysOrigine: setPaysOrigine,
    TrPaysDestinataire: PaysDestinatinataire,
    TrUpdatePaysDestinataire: setPaysDestinataire,
    TrBillingInformation: BillingInformation,
    TrUpdateBillingInformation: setBillingInformation,
    TrRate: rate,
    TrUpdateRate: setRate,
    TrFees: fees,
    TrUpdateFees: setFees,
    TrTotal: total,
    TrUpdateTotal: setTotal,
    TrCurrFrom: currFrom,
    TrUpdateCurrFrom: setCurrFrom,
    TrCurrTo: currTo,
    TrUpdateCurrTo: setCurrTo,
    TrAmountSent: amountSent,
    TrUpdateAmountSent: setAmountSent,
    TrAmountReceived: amountReceived,
    TrUpdateAmountReceived: setAmountReceived,
    TrAmFee: amFee,
    TrUpdateAmFee: setAmFee,
  };

  return (
    <TestProvider value={transaction}>
      <TransferForm />
    </TestProvider>
  );
};

export default TransfertPage;
