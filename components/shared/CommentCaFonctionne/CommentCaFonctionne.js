import { Container, Row, Col, Card } from "reactstrap";
import { BsFillStopwatchFill } from "react-icons/bs";
import BlockFonctionnement from "../BlockFonctionnement/BlockFonctionnement";
import CommentCaFonctionneStc from "../CommentCaFonctionne/CommentCaFonctionne.stc";

import Titre from "../Titre/Titre";
 
const Listeblock = [
    {
        titre: "1. Simuler votre transaction",
        color:"#007bff",
        paragraphe:"Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients.",
        icon:"/img/fpic1.svg"
    },
    {
      titre: "2. Entrer le destinataire ",
      color:"#007bff",
      paragraphe:"Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients.",
      icon:"/img/fpic2.svg"
  },
  {
    titre: "3. Confirmer et envoyer",
    color:"#007bff",
    paragraphe:"Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients.",
    icon:"/img/fpic3.svg"
  }
  ];
const CommentCaFonctionne = (props) => {
  return(
    <CommentCaFonctionneStc>
        <Container>
            <Titre texte="Comment ca fonctionne uhn?" color="#007bff"/>
            <Row>
            {Listeblock.map(block => <Col lg={4}><BlockFonctionnement 
                key={block.titre.length} 
                color={block.color} 
                paragraphe={block.paragraphe}
                icon={block.icon} 
                titre={block.titre}  
                />
                </Col>
            )}
            </Row>
        </Container>
    </CommentCaFonctionneStc>
  )
};

export default CommentCaFonctionne;