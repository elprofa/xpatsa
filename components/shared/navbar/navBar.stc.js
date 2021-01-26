import { Navbar } from "reactstrap";
import styled from "styled-components";

export const NavbarWrap = styled(Navbar)`
  background-color: ${(props) => (props.pathname === "/" ? "yellow" : "green")};
`;
