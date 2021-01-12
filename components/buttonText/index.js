import React from "react";
import { ButtonText } from "./buttonText.stc";

const BtnText = (props) => {
  const { text } = props;
  return <ButtonText>{text}</ButtonText>;
};

export default BtnText;
