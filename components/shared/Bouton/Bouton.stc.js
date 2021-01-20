import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
const BoutonStc = styled(Button)`
  background: ${(props) => props.backgroundColor || "#ccc"};
  border: 1px solid ${(props) => props.borderColor || "transparent"};
  border-radius: 0px;
  color: ${(props) => props.color || "#fff"};
  min-width:${(props) => props.minWidth || "40px"} !important;
  min-height: 23px;
  position: relative;
  overflow: hidden;
  font-size: 12px;
  @media (min-width: 900px) {
    min-width: 80px;
    min-height: 33px;
  }

  &:before {
    content: " ";
    display: block;
    width: 200px;
    height: 80px;
    background: rgba(255, 255, 255, 0.2);
    position: absolute;
    top: -10px;
    left: -200px;
    transform: rotate(-50deg);
    transition: all 0.9s ease-in-out;
  }
  &:hover:before {
    margin-left: 150%;
  }
  &:hover {
    color: ${(props) => props.color || "#fff"};
  }
  .badge {
    background: transparent;
    font-weight: 800;
    font-size: inherit;
    color: ${(props) => props.color || "#fff"};
  }
`;

export default BoutonStc;
