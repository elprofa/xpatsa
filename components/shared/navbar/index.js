import React, { useState } from "react";
import { useRouter } from "next/router";
import Bouton from "../Bouton/Bouton";
import DropDownInput from "../dropDownInput/dropDownInput";
import Image from "next/image";
import Link from "next/link";

import {
  Collapse,
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
  Container,
} from "reactstrap";

import Menu from '../Menu'

import { NavbarWrap } from "./navBar.stc";

const ListeMenu = [
  {
      texte: "Transfert d'argent",
      lien:"/transfert",
      index:0
  },
  {
      texte: "A propos",
      lien:"/apropos",
      index:1
  },
  {
    texte: "Contact",
    lien:"/contact",
    index:2
  }
  ,
  {
    texte: "S'inscrire",
    lien:"/inscription",
    index:3
  }
];

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { pathname } = router;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarWrap color="blue" pathname={pathname} light expand="md">
      <Container className="px-0">
        <NavbarBrand href="/">
          <Image src="/img/Logo_Xpatsa.png" width={80} height={80} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <DropDownInput
                OptionList={[
                  { item: "FR", value: "fr" },
                  { item: "EN", value: "en" },
                ]}
                backgroundColor="transparent"
              />
            </NavItem>
            {ListeMenu.map(liste =><Menu 
                key={liste.index} 
                texte={liste.texte} 
                lien={liste.lien}
                mypath={liste.mypath} 
                />
            )}
            
          </Nav>
         
          <Link href="/connexion">
            <NavbarText>
              <Bouton
                color="#000"
                borderColor="#000"
                minWidth="150px"
                backgroundColor="transparent"
                texte="SE CONNECTER"
              />
            </NavbarText>
          </Link>
        </Collapse>
      </Container>
    </NavbarWrap>
  );
};

export default Header;
