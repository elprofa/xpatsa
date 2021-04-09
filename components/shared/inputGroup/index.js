import React from "react";
import { Label, Input, } from "reactstrap";

import { FormWarp } from "./inputGroup.stc";

const InputGroup = (props) => {
  const {name,change,children, textLabel, typeInput, nameInput, idInput, valueInput } = props;

  console.log(props);
  return (
    <FormWarp>
      
      <Label for={idInput}>{textLabel}</Label>
      <Input
        type={typeInput}
        name={nameInput}
        id={idInput}
        value={valueInput} 
        onChange={change}
        name={name}
        className={props.myClass}
      />
    </FormWarp>
  );
};

export default InputGroup;