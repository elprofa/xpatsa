import styled from "styled-components";

import { FormGroup } from "reactstrap";

export const FormWarp = styled(FormGroup)`

  input
  {
    border-radius:0px;
    position:relative;
    margin-left:0px;

  }
  input:focus {
    box-shadow: 0px 0px 0px #000;
  }
  label
  {
    margin-right: 10px;
    background: #fff;
    padding: 0px 5px;
    font-size: 12px;
    color: #6c757d;
    margin-left:0px;
  }
`;
