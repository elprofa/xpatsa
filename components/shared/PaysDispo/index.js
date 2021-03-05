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
                        <Titre texte="Disponible dans 3 pays du monde" underline="2" color="#007bff"/>
                        <p>Envoyez et recevez de l’argent partout que vous soyez en Afrique du Sud,
                            au Gabon, ou au Maroc grâce à Xpatsa et nos partenaires locaux.
                            
                            Xpatsa vous offre un service de transfert d’argent rapide et près 
                            de chez vous, qui joint des prix accessibles à une qualité de 
                            service de proximité.

                            Xpatsa vous assure un transfert d’argent en Afrique du Sud, au Gabon, 
                            au Maroc rapide, sécurisé, et efficace bientot disponible dans 
                            d'autres destinations sur le continent.<br></br></p>
                            
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