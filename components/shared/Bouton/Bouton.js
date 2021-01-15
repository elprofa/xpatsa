import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Badge} from 'reactstrap';
import BoutonStc from './Bouton.stc';
import { BsChevronRight } from "react-icons/bs";

const Bouton = (props) => {
  const { texte, backgroundColor,color, icon } = props;
  return (
    <BoutonStc variant="primary" color={color} backgroundColor={backgroundColor}>{texte} { icon?<Badge variant=""> <BsChevronRight /></Badge>:''} </BoutonStc>
  )
};

export default Bouton;