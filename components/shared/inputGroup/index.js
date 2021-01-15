import React from "react";
import { Label, Input } from "reactstrap";

import { FormWarp } from "./inputGroup.stc";

const InputGroup = (props) => {
  const { textLabel, typeInput,nameInput,idInput, valueInput } = props;
  return (
    <FormWarp>
      <Label for={idInput}>{textLabel}</Label>
      <Input
        type={typeInput}
        name={nameInput}
        id={idInput}
        value={valueInput}
        
      />
    </FormWarp>
  );
};

export default InputGroup;