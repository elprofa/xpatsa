import { Navbar } from "reactstrap";
import styled from "styled-components";

export const NavbarWrap = styled(Navbar)`

  background: ${(props) => (props.pathname === "/" ? "linear-gradient(#0a0a0a, transparent)" : "#fff")} ;

  
  .active.nav-item {
        border-bottom:4px solid #007bff !important;
  }

  a,select,button,svg 
  {
    color: ${(props) => (props.pathname === "/" ? "#fff !important" : "inherit")} ;
  }

  select.form-control option {
      color: ${(props) => (props.pathname === "/" ? "#000 !important" : "inherit")}  !important;
  }

  select.form-control:focus {
    background-color:transparent !important;
      border:1px solid ${(props) => (props.pathname === "/" ? "#fff !important" : "inherit")}  !important;
      color:${(props) => (props.pathname === "/" ? "#fff !important" : "inherit")}  !important;
  }
  button 
  {
    border-color: ${(props) => (props.pathname === "/" ? "#fff !important" : "inherit")} ;
  }
`;
