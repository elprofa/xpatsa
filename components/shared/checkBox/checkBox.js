import React from "react";
import { Label, Input } from "reactstrap";

import { FormWarp } from "./checkBox.stc";

const InputGroup = (props) => {
  const { textLabel, typeInput,nameInput,idInput, valueInput } = props;
  return (
    <FormWarp>
      <Input
        type="checkbox"
        name={nameInput}
        id={idInput}
        value={valueInput}
      />
      <Label for={idInput}>{textLabel}</Label>
    </FormWarp>
  );
};

export default InputGroup;