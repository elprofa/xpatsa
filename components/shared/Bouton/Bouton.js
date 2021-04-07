import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge } from "reactstrap";
import BoutonStc from "./Bouton.stc";
import { BsChevronRight } from "react-icons/bs";

const Bouton = (props) => {
  const { texte, backgroundcolor, bordercolor, color, minwidth, icon } = props;
  return (
    <BoutonStc
      variant="primary"
      bordercolor={bordercolor}
      color={color}
      minwidth={minwidth}
      backgroundcolor={backgroundcolor}
      taille={props.taille}
    >
      {texte}{" "}
      {icon ? (
        <Badge variant="">
          {" "}
          <BsChevronRight />
        </Badge>
      ) : (
        ""
      )}{" "}
    </BoutonStc>
  );
};

export default Bouton;
