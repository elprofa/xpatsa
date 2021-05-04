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
 button {
    @media (max-width: 991px) {
      margin-top:20px;
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

  .response
  {
      width: 100%;
      text-align: center;
      margin: 20px 0px;
  }
`;

export default FormLoginStc;
