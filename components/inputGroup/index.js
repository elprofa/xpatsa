import React from "react";
import { Label, Input } from "reactstrap";

import { FormWarp } from "./inputGroup.stc";

const InputGroup = () => {
  return (
    <FormWarp>
      <Label for="exampleEmail">Email</Label>
      <Input
        type="email"
        name="email"
        id="exampleEmail"
        placeholder="with a placeholder"
      />
    </FormWarp>
  );
};

export default InputGroup;
