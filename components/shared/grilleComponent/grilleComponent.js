import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Titre from '../Titre/Titre';
import {Row,Col,Form} from 'reactstrap';
import GrilleComponentStc from './grilleComponent.stc';
import Image from 'next/image';

const GrilleComponent = (props) => {
    const { position, texteTitre,colorTitre,paragraphe,picture} = props;
    if(position=="right")
    {
        return (
            <GrilleComponentStc >
                <Row id={position}>
                    <Col lg={6} className="divTexte">
                        <Titre texte={texteTitre} color={colorTitre} />
                        <p>{paragraphe}</p>

                    </Col>
                    <Col lg={6}  className="h-100 d-none d-lg-block divPictureRight">
                        <Image 
                            src={picture}
                            alt="Picture of computer"
                            layout="fill"
                        />
                    </Col>
                </Row>
            </GrilleComponentStc>
        )
    }
    else
    {
        return (
            <GrilleComponentStc >
                <Row id={position}>
                    <Col lg={6} className="h-100 d-none d-lg-block divPictureLeft">
                        <Image 
                            src={picture}
                            alt="Picture of computer"
                            layout="fill"
                        />
                    </Col>
                    <Col lg={6} className="divTexte">
                        <Titre texte={texteTitre} color={colorTitre} />
                        <p>{paragraphe}</p>

                    </Col>
                </Row>
            </GrilleComponentStc>
        )
    }
  };

export default GrilleComponent;