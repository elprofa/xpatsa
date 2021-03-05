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
            90% de nos transactions sont livrées en quelques minutes <br/>.
          </p>
        </BlockDeviseStc>
      </Col>
      <Col lg={4}>
        <BlockDeviseStc>
          <h1>
            <BsFillLockFill/>SECURISE
          </h1>
          <p>
          Xpatsa vous garantit le même niveau de sécurité qu'Airtel Money,votre porte money electronique.
          </p>
        </BlockDeviseStc>
      </Col>
      <Col lg={4}>
        <BlockDeviseStc>
          <h1>
            <BsPersonCheckFill/>EFFICACITE
          </h1>
          <p>
            Avec Xpatsa, nous vous offrons un service local à une échelle
            international, aux tarifs exceptionnel.
            N'atendez plus, faites des économies avec Xpatsa
          </p>
        </BlockDeviseStc>
      </Col>
    </Row>
    
    
  )
};

export default BlockDevise;