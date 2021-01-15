import React, { useState } from "react";
import Bouton from "../Bouton/Bouton";
import DropDownInput from "../dropDownInput/dropDownInput";
import Image from 'next/image'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="blue" light expand="md">
      <NavbarBrand href="/"><Image src='/img/Logo_Xpatsa.png' width={80} height={80} /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <DropDownInput OptionList={[{item:"yes",value:"cool"}]}/>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Transfert d'Argent
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">A propos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/wedo">
                S'inscrire
              </NavLink>
            </NavItem>
      
          </Nav>
          <NavbarText>
            <Bouton color="#000" borderColor="#000" backgroundColor="#FFF" texte="SE CONNECTER" />
           </NavbarText>
        </Collapse>
      </Navbar>
  );
};

export default Header;
