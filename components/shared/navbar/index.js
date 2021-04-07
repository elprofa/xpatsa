import React, { useState } from "react";
import { useRouter } from "next/router";
import Bouton from "../Bouton/Bouton";
import DropDownInput from "../dropDownInput";
import Image from "next/image";
import Link from "next/link";
import Styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { AiOutlineLogout } from "react-icons/ai";
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

const cookies = parseCookies();

const ListeMenu = [
  {
    texte: "Transfert d'argent",
    lien: "/transfert",
  },
  {
    texte: "A propos",
    lien: "/apropos",
  },
  {
    texte: "Contact",
    lien: "/contact",
  },
  
];

const logoutUser=()=>{

  destroyCookie(null, 'jwt');
  destroyCookie(null, 'strapi-user');
  destroyCookie(null, 'user');

  console.log('coockie destroyed')
}



const MenuAdmin=Styled(Row)`
  margin:20px 0px;
  @media (max-width: 476px)
  {
    padding:5px !important;
  }

  [class*='col-']
  {
      @media (max-width: 476px)
      {
        padding:0px !important;
      }
  }
  

  @media (min-width: 990px)
  {
    display:none !important;
  }
  input 
  {
      border-radius: 0px;
      height: 100%;
      border: 0px;
      padding-right: 25px;
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
    right: 10px;
}
`;

const hideNavBar=()=>{
  var element=document.getElementById("sidebar");

  element.classList.toggle("hidden");

  var cls=element.className;
  var search=cls.search('hidden');

}
const menuDependAuth=()=>{
  
  if(cookies?.jwt==null || !cookies)
  {
    return(
      <Menu
        texte="S'inscrire"
        lien="/inscription"
      />
    )
  }
  else
  {
    return(
      <>
        <Menu
          texte="Mon Compte"
          lien="/dashboard"
          myClass="activeLogin"
        />
        <li className="nav-item">
          <a className="nav-link" onClick={logoutUser}>
          <AiOutlineLogout/>
          </a>
        </li>
        
      </>
    )
  }
}


const checkLoginBtn=()=>{

  if(cookies?.jwt==null || !cookies){

    return(
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
    )
  }
  else
  {
    
  }

}

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { pathname } = router;

  const toggle = () => setIsOpen(!isOpen);
  
  console.log(router.pathname)

  if(router.pathname !="/dashboard" 
  && router.pathname !="/transactions" 
  && router.pathname !="/clients" 
  && router.pathname !="/analyse" 
  && router.pathname !="/setting" 
  && router.pathname !="/save-transaction" 
  && router.pathname !="/save-client"  
  && router.pathname !="/client/[id]" 
  && router.pathname !="/transaction/[id]" 
  && router.pathname !="/transaction/update/[id]" 
  && router.pathname !="/client/update/[id]" 


  
  )
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
            {
              menuDependAuth()
            }
          </Nav>
              
              {
                checkLoginBtn()
              }

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
            <input type="texte" className="form-control" placeholder="recherche ici ...." />
            <span className="iconSearch">
                <FaSearch/>
            </span>
          </Col>
        </MenuAdmin>
      )
  }
};

export default Header;
