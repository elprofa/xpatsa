import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  NavLink,
} from "reactstrap";

import {MenuStc} from './Menu.stc'

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { texte, lien,mypath} = props;
  const { pathname } = router;
  const toggle = () => setIsOpen(!isOpen);  

  return (
    <MenuStc className={router.pathname == lien ? "active "+ props.myClass : props.myClass } >
        <Link href={lien}>
        <NavLink href={lien}>
            {texte} {props.icon}
        </NavLink>
        </Link>
    </MenuStc>
  );
};

export default Menu;
