import { Navbar } from "reactstrap";
import styled from "styled-components";

export const NavbarWrap = styled(Navbar)`

@media (min-width: 991px) 
{
  a,select,button,svg 
  {
    color: ${(props) => (props.pathname === "/" ? "#fff !important" : "inherit")} ;
  }


  background: ${(props) => (props.pathname === "/" ? "linear-gradient(#0a0a0a, transparent)" : "#fff")} ;
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
}
  
.iconLogOut
{
  cursor:pointer;
}

.menuIconLogout a
{
  font-size:26px
}

.active.nav-item {
      border-bottom:4px solid #007bff !important;
}
`;
