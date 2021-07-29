import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
const BoutonStc = styled(Button)`
  background: ${(props) => props.backgroundcolor || "#ccc"};
  border: 1px solid ${(props) => props.bordercolor || "transparent"};
  border-radius: 50%;
  color: ${(props) => props.color || "#fff"};
  min-width: ${(props) => props.minwidth || "40px"} !important;
  min-height: 40px;
  position: relative;
  overflow: hidden;
  font-size: 12px;
  @media (min-width: 900px) {
    min-width: 80px;
    min-height: 40px;
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
