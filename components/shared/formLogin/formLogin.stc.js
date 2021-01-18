import styled from "styled-components";
import { Container } from "reactstrap";

const FormLoginStc = styled(Container)`
  h1 {
    margin-bottom: 30px;
    border-bottom: 1px solid #ecedee;
    font-size: 12px;
    @media (min-width: 900px) {
      font-size: 34px;
    }
  }
  label,
  button,
  #left a,
  input {
    font-size: 8px;
    @media (min-width: 900px) {
      font-size: 12px;
    }
  }

  a {
    font-size: 12px;
  }
  #left {
    text-align: left;
  }
  #right {
    text-align: right;
  }
`;

export default FormLoginStc;
