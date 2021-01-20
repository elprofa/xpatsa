import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Titre from '../Titre/Titre';
import { Col, Container } from 'reactstrap';
import GrilleComponentPaysStc from './PaysDispo.sct';
import Image from 'next/image';
import { FiPhoneCall } from 'react-icons/fi';
import BiPhoneCall from 'react-icons/bi';

const GrilleComponentPays = (props) => {
    
   return (

    <div>
        
        <GrilleComponentPaysStc fluid>
            <Container className='d-flex justify-content-center'>
                    <Col lg={6} className="divTexte">
                        <h3>Disponible dans 3 pays du monde </h3>  
                        <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à 
                            titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
                            le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
                            <span><span><FiPhoneCall></FiPhoneCall></span> <span>Maroc <br></br>077.44.42.39</span></span>
                            <span><span><FiPhoneCall></FiPhoneCall></span> <span>Afrique du Sud <br></br>077.44.42.39</span></span>
                    </Col>
                    
                    <Col lg={6}  className="h-80 d-none d-lg-block">
                        <Image 
                            src={'/img/apropos-pic2.jpg'}
                            alt="Picture of computer"
                            layout="fill"
                        />
                    </Col>
            
            </Container>    
        </GrilleComponentPaysStc>
    </div>
            

        )
  };

export default GrilleComponentPays;