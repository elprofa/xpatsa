import styled from "styled-components";
import { Container } from "reactstrap";

const FormLoginStc = styled(Container)`
  h1 {
    margin-bottom: 30px;
    border-bottom: 1px solid #ecedee;
    font-size: 22px;
    @media (min-width: 900px) {
      font-size: 34px;
    }
  }
  label,
  button,
  #left a,
  input {
    font-size: 15px;
    @media (min-width: 900px) {
      font-size: 18px;
    }
  }

  a {
    font-size: 15px;
  }
  #left {
    text-align: left;
  }
  #right {
    text-align: right;
  }
  .col-lg-6
  {
    @media (max-width: 996px) {
      text-align:center !important;
    }
  }
`;

export default FormLoginStc;
