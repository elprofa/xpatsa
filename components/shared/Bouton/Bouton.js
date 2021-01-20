import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Badge} from 'reactstrap';
import BoutonStc from './Bouton.stc';
import { BsChevronRight } from "react-icons/bs";

const Bouton = (props) => {
  const { texte, backgroundColor,borderColor,color,minWidth, icon } = props;
  return (
    <BoutonStc variant="primary" borderColor={borderColor} color={color} minWidth={minWidth} backgroundColor={backgroundColor}>{texte} { icon?<Badge variant=""> <BsChevronRight /></Badge>:''} </BoutonStc>
  )
};

export default Bouton;