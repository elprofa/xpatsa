import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Titre from '../Titre/Titre';
import { Col, Container, Row } from 'reactstrap';
import GrilleComponentPaysStc from './PaysDispo.stc';
import Image from 'next/image';
import { FiPhoneCall } from 'react-icons/fi';
import BiPhoneCall from 'react-icons/bi';

const GrilleComponentPays = (props) => {
    
   return (

    <div fluid className='bg-white my-3'>
        
        <GrilleComponentPaysStc fluid>
            <Container className='d-flex justify-content-center'>
                    <Col lg={8} className="divTexte">
                        <h3>Disponible dans 3 pays du monde </h3>  
                        <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à 
                            titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
                            le faux-texte dès qu'il est prêt ou que la mise en page est achevée.<br></br></p>
                            
                            <table className="table">
                                <tr>
                                    <td className="tdIcon">
                                        <FiPhoneCall className='bg-primary' color='white' size={45}></FiPhoneCall>
                                    </td>
                                    <td className="tdInfo">
                                        <span className="spanBold">Maroc</span><br/>
                                        <span>077.44.42.39</span>
                                    </td>
                                    <td className="tdIcon">
                                        <FiPhoneCall className='bg-primary' color='white' size={45}></FiPhoneCall>
                                    </td>
                                    <td className="tdInfo">
                                        <span className="spanBold">Afrique du sud</span><br/>
                                        <span>077.44.42.39</span>
                                    </td>
                                </tr>
                            </table>
                        </Col>
                    
                    <Col lg={4}  className="h-80 d-none d-lg-block">
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