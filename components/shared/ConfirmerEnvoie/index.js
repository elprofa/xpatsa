import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Label, CardBody, CardTitle, CardText, Button } from "reactstrap";
import Titre from "../Titre/Titre";
import InputGroup from "../inputGroup";
import Bouton from "../Bouton/Bouton";
import ConfirmerEnvoyerStc from './ConfirmerEnvoie.stc';

const ConfirmerEnvoyer = (props) => {
    const { texte, backgroundColor, color, icon } = props;
  
    return (
      <ConfirmerEnvoyerStc className='w-100'>
        
          <Titre texte="3. Confirmer et envoyer" color="black" />
          <p className='my-5'>
            Veuillez voir ci-dessous le récaputulatif de votre tranfert.
          </p>
          
          <Card>

          <CardBody>
          <CardTitle tag="h6">Montant à envoyer:</CardTitle>
          <CardTitle tag="h6">Frais de transfert:</CardTitle>
          <CardTitle tag="h6">Montant total à payer:</CardTitle>
          <CardTitle tag="h6">Destinataire:</CardTitle>
          <CardTitle tag="h6">Description:</CardTitle>
          <CardText>Some quick example text to build on the card title and make.</CardText>

            <Button>Button</Button>


            <Button className='bnt my-3' texte=" PRECEDENT " backgroundColor="#FDFEFE" color='#4d3333' />
              

            <Row>
              <Col lg={8}>
                <Button texte=" ENVOYER " icon="false" backgroundColor="#007bff" className='btn my-3 btn'/>
              </Col>
              </Row>
              </CardBody>
              </Card>
      </ConfirmerEnvoyerStc>
    );
  };
  
  export default ConfirmerEnvoyer;