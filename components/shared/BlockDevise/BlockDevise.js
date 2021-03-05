import { Container, Row, Col, Card } from "reactstrap";
import BlockDeviseStc from "./BlockDevise.stc";
import { BsFillStopwatchFill } from "react-icons/bs";
import { BsPersonCheckFill } from "react-icons/bs";
import { BsFillLockFill } from "react-icons/bs";

const BlockDevise = (props) => {
  const { icon, titre, paragraphe,color } = props;
  return(
    <Row>
      <Col lg={4}>
        <BlockDeviseStc>
          <h1>
            <BsFillStopwatchFill/>RAPIDE
          </h1>
          <p>
            Le transfert d'argent via XPATSA vous laisse sans voix, 95% de nos transactions sont livrées en quelques minutes.
            Vous configurez votre premier transfert en 3 étapes seulement et en un seul clic pour
            les transferts récurrents.
          </p>
        </BlockDeviseStc>
      </Col>
      <Col lg={4}>
        <BlockDeviseStc>
          <h1>
            <BsFillLockFill/>SECURISE
          </h1>
          <p>
            Doté d’un système stable, sûr, d’un réseau de qualité fiable avec une technologie de pointe, XPATSA protège
            votre argent et garantit qu'il arrive en toute sécurité à chaque fois.
          </p>
        </BlockDeviseStc>
      </Col>
      <Col lg={4}>
        <BlockDeviseStc>
          <h1>
            <BsPersonCheckFill/>EFFICACITE
          </h1>
          <p>Nous offrons d'excellents taux de change et des frais peu élevés afin de satisfaire en mieux nos clients.Alors n'atendez plus, faites des économies avec Xpatsa.
          </p>
        </BlockDeviseStc>
      </Col>
    </Row>
    
    
  )
};

export default BlockDevise;