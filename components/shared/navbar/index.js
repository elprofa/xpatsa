import React, { useState } from "react";
import Bouton from "../Bouton/Bouton";
import DropDownInput from "../dropDownInput/dropDownInput";
import Image from 'next/image';
import Link from 'next/link';
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
  Container
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="blue" light expand="md">
      <Container className="px-0">
        
      <NavbarBrand href="/"><Image src='/img/Logo_Xpatsa.png' width={80} height={80} /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <DropDownInput OptionList={[{item:"FR",value:"fr"},{item:"EN",value:"en"}]}/>
            </NavItem>
            <NavItem>
              <Link href="/transfert">
                <NavLink active={true} href="transfert">
                  Transfert d'Argent
                </NavLink>
              
              </Link>
              
            </NavItem>
            <NavItem>
            <Link href="/apropos"> 
              <NavLink href="/apropos">A propos</NavLink>
            </Link>
            </NavItem>
            <NavItem>
            <Link href='/contact'>
              <NavLink href="/contact">
                Contact
              </NavLink>
            </Link>
            </NavItem>
            <NavItem>
              <Link href="/inscription">
              <NavLink href="/inscription">
                S'inscrire
              </NavLink>
              </Link>
            </NavItem>
      
          </Nav>
            <Link href="/connexion">
          <NavbarText>
              <Bouton color="#000" borderColor="#000" backgroundColor="#FFF" texte="SE CONNECTER" />
           </NavbarText>
            </Link>
        </Collapse>
      </Container>
      </Navbar>
  );
};

export default Header;
