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
            Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients.
          </p>
        </BlockDeviseStc>
      </Col>
      <Col lg={4}>
        <BlockDeviseStc>
          <h1>
            <BsFillLockFill/>SECURISE
          </h1>
          <p>
            Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients.
          </p>
        </BlockDeviseStc>
      </Col>
      <Col lg={4}>
        <BlockDeviseStc>
          <h1>
            <BsPersonCheckFill/>EFFICACITE
          </h1>
          <p>
            Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients.
          </p>
        </BlockDeviseStc>
      </Col>
    </Row>
    
    
  )
};

export default BlockDevise;