import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Titre from '../Titre/Titre';
import ImageAccueilStc from './ImageAccueil.stc';
import Image from 'next/image';

import {BsChevronDoubleDown} from "react-icons/bs";

const ImageAccueil = (props) => {
    return (
      <ImageAccueilStc>
          <Image 
            src='/img/student.jpg'
            alt="Picture of computer"
            layout="fill"
            />
        <Titre texte="Qui sommes-nous ?"color="#fff" />
        <BsChevronDoubleDown />
      </ImageAccueilStc>
    )
  };
export default ImageAccueil;