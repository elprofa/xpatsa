import React, { useState } from "react";
import { useRouter } from "next/router";
import Bouton from "../Bouton/Bouton";
import DropDownInput from "../dropDownInput";
import Image from "next/image";
import Link from "next/link";
import Styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
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
  Row,
  Col
} from "reactstrap";
import { BiMenu } from "react-icons/bi";

import Menu from "../Menu";

import { NavbarWrap } from "./navBar.stc";

const ListeMenu = [
  {
    texte: "Transfert d'argent",
    lien: "/transfert",
  },
  {
    texte: "A propos",
    lien: "/",
  },
  {
    texte: "Contact",
    lien: "/dashboard",
  },
  {
    texte: "S'inscrire",
    lien: "/inscription",
  },
];

const MenuAdmin=Styled(Row)`
  margin:20px 0px;
  @media (min-width: 990px)
  {
    display:none !important;
  }
  input 
  {
      border-radius: 0px;
      height: 100%;
      border: 0px;
      padding-left: 25px;
  }
  
  span 
  {
    font-size:30px;
    color:#000;
  }

  span.iconSearch {
    position: absolute;
    font-size: 20px;
    top: 10px;
    left: 0;
}
`;

const hideNavBar=()=>{
  var element=document.getElementById("sidebar");

  element.classList.toggle("hidden");

  var cls=element.className;
  var search=cls.search('hidden');

  var element1=document.getElementById("iconCloseAsideBar");

  if(search!=-1)
  {
      element1.className = "iconActive";
  }
  else
  {
      element1.className = "";
  }
}

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { pathname } = router;

  const toggle = () => setIsOpen(!isOpen);
  
  if(router.pathname !="/dashboard" && router.pathname !="/transaction" && router.pathname !="/client" 
  && router.pathname !="/analyse" && router.pathname !="/setting")
  {
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
                backgroundcolor="transparent"
              />
            </NavItem>
            {ListeMenu.map((liste, index) => (
              <Menu
                key={index}
                texte={liste.texte}
                lien={liste.lien}
                mypath={liste.mypath}
              />
            ))}
          </Nav>

          <Link href="/connexion" passHref>
            <a>
            <Bouton
              color="#000"
              bordercolor="#000"
              minwidth="150px"
              backgroundcolor="transparent"
              texte="SE CONNECTER"
            />
            </a>
          </Link>
        </Collapse>
      </Container>
    </NavbarWrap>
  );
  }
  else
  {
      return(
        <MenuAdmin>
          <Col sm={2} className="col-2">
            <span className="MenuHamburgerAdmin" onClick={hideNavBar}><BiMenu /></span>
          </Col> 
          <Col sm={10} className="col-10">
          <span className="iconSearch">
              <FaSearch/>
          </span>
          <input type="texte" className="form-control" placeholder="recherche ici ...." />
          </Col>
        </MenuAdmin>
      )
  }
};

export default Header;
