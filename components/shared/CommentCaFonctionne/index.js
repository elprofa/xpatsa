import { Container, Row, Col, Card } from "reactstrap";
import { BsFillStopwatchFill } from "react-icons/bs";
import BlockFonctionnement from "../BlockFonctionnement/BlockFonctionnement";
import CommentCaFonctionneStc from "../CommentCaFonctionne/CommentCaFonctionne.stc";

import Bouton from "../Bouton/Bouton";
import Titre from "../Titre/Titre";

const Listeblock = [
  {
    titre: "1. Simuler votre transaction",
    color: "#007bff",
    paragraphe:
      "Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût",
    icon: "/img/fpic1.svg",
    key: "je",
  },
  {
    titre: "2. Entrer le destinataire ",
    color: "#007bff",
    paragraphe:
      "Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût",
    icon: "/img/fpic2.svg",
    key: "suis",
  },
  {
    titre: "3. Confirmer et envoyer",
    color: "#007bff",
    paragraphe:
      "Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût",
    icon: "/img/fpic3.svg",
    key: "elprofa",
  },
];
const CommentCaFonctionne = (props) => {
  return (
    <CommentCaFonctionneStc>
      <Container>
        <Titre texte="Comment ca fonctionne ?" color="#007bff" />
        <Row>
          {Listeblock.map((block) => (
            <Col lg={4}>
              <BlockFonctionnement
                key={block.key.length}
                color={block.color}
                paragraphe={block.paragraphe}
                icon={block.icon}
                titre={block.titre}
              />
            </Col>
          ))}
        </Row>
        <Bouton
          texte="COMMENCEZ MAITENANT "
          backgroundcolor="#007bff"
          color="#fff"
          icon="true"
        />
      </Container>
    </CommentCaFonctionneStc>
  );
};

export default CommentCaFonctionne;
