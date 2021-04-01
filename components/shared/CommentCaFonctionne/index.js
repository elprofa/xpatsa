import { Container, Row, Col, Card } from "reactstrap";
import { BsFillStopwatchFill } from "react-icons/bs";
import BlockFonctionnement from "../BlockFonctionnement/BlockFonctionnement";
import CommentCaFonctionneStc from "../CommentCaFonctionne/CommentCaFonctionne.stc";
import Link from 'next/link';
import Bouton from "../Bouton/Bouton";
import Titre from "../Titre/Titre";

const Listeblock = [
  {
    titre: "1. Simuler votre transaction",
    color: "#007bff",
    paragraphe:
      "Il s'agit ici de faire une simulation sur votre transaction en utilisant un formulaire proposé par XPATSA pour "+
      "avoir une idée sur les tarifs proposés par celui-ci",
    icon: "/img/fpic1.svg",
    key: "je",
  },
  {
    titre: "2. Entrer le destinataire ",
    color: "#007bff",
    paragraphe:
      "Il vous suffit juste de saisir les contacts du destinataire après avoir tombé d'accord avec XPATSA sur les tarifs proposés",
    icon: "/img/fpic2.svg",
    key: "suis",
  },
  {
    titre: "3. Confirmer et envoyer",
    color: "#007bff",
    paragraphe:
      "Un clic suffit pour réaliser cette opération. et voilà vous avez transféré l'argent à votre destinataire",
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
        <Link href="transfert">
            <a>
              <Bouton
                texte="COMMENCEZ MAITENANT "
                backgroundcolor="#007bff"
                color="#fff"
                icon="true"
              />
          </a>
        </Link>
      </Container>
    </CommentCaFonctionneStc>
  );
};

export default CommentCaFonctionne;
