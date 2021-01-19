import { Container, Row, Col, Card } from "reactstrap";
import BlockFonctionnementStc from "./BlockFonctionnement.stc";
import { BsFillStopwatchFill } from "react-icons/bs";
import Image from 'next/image';

const BlockFonctionnement = (props) => {
  const { icon, titre, paragraphe,color } = props;
  return(
    <BlockFonctionnementStc>
        <Image 
        src={icon} 
        width="100"
        height="100"
        alt="Image fonctionnement"
        />
        <h1>{titre}</h1>
        <p>
            {paragraphe}
        </p>
    </BlockFonctionnementStc>
  )
};

export default BlockFonctionnement;