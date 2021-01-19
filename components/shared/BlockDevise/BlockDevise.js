import { Container, Row, Col, Card } from "reactstrap";
import BlockDeviseStc from "./BlockDevise.stc";
import { BsFillStopwatchFill } from "react-icons/bs";
const BlockDevise = (props) => {
  const { icon, titre, paragraphe,color } = props;
  return(
    <BlockDeviseStc>
        <h1>{titre}</h1>
        <p>
            {paragraphe}
        </p>
    </BlockDeviseStc>
  )
};

export default BlockDevise;