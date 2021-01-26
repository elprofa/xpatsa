import React from "react";
import TransferForm from "../components/transferFrom";

const TransfertPage = (props) => {
  return (
    <div>
      <TransferForm />
      {console.log(props)}
    </div>
  );
};

export default TransfertPage;
