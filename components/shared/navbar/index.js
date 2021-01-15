import React, { useState } from "react";
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

import Bouton from '../Bouton/Bouton.js';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div color='black' className='d-flex justify-content-end'>
      <Navbar color="blue" light expand="md">
      <NavbarBrand href="/">Button Langue ici</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
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
              <NavLink href="https://github.com/reactstrap/reactstrap">
                S'inscrire
              </NavLink>
            </NavItem>
      
          </Nav>
          <NavbarText><Bouton variant="light" color={'black'} backgroundColor={'transparent'} texte={'Se connecter'} /></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
