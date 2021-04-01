import Link from "next/link";
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import ImageAccueil from "../components/shared/ImageAccueil/ImageAccueil";
import Bouton from "../components/shared/Bouton/Bouton";
import GrilleComponent from "../components/shared/grilleComponent/grilleComponent";

const Wrapper = styled.div`
  .row {
    margin: 0px;
  }

  button {
    margin: 20px auto;
    display: block;
  }

  .divMiddle {
    background: #f8f8f8;
    padding-bottom: 20px;
  }
`;

const ListeGrille = [
  {
    position: "left",
    texteTitre: "Aide aux etudiants",
    colorTitre: "#007bff",
    paragraphe:
      "XPATSA, aide et accompagne les étudiants dans les démarches administratives pour les études a l’etranger (Maroc)."+
      "Confiez-nous votre dossier et vous aurez les résultats ahurissants. Avec une équipe experte professionnelle dans "+
      "ce qu’elle fait, étudier à l’etranger n’est plus un casse-tête.",
    picture: "/img/apropos-pic4.jpg",
  },
  {
    position: "right",
    texteTitre: "Aides médicales",
    colorTitre: "#007bff",
    paragraphe:
      "Sans prise en charge médicale à l’etranger la vie devient encore plus compliquée surtout pour un étudiant, "+
      "Cependant l’obtention de l' assurance maladie n’a toujours pas été facile. Dans le souci de donner une meilleure "+
      "vie aux étrangers, XPATSA vous accompagne dans la procédure d’obtention de l’assurance maladie à l’etranger.",
    picture: "/img/slide7.jpg",
  }
];

export default function Apropos() {
  return (
    <Wrapper>
      <Row>
        <Col sm={12}>
          <ImageAccueil picture="/img/children.jpg" />
        </Col>
      </Row>
      <Container>
        <GrilleComponent
          position="right"
          texteTitre="XPATSA"
          colorTitre="#007bff"
          paragraphe="XPATSA est une agence qui vous permet de faire parvenir de l’argent soit à vos proches,parents, amis clients
          ou autres a l’etranger.Et si l’argent n’avait plus de frontière? Avec XPATSA Transférez de l'argent à 
          l'international avec une rapidité,sécurité et efficacité impressionnante.
          Présent actuellement dans trois (3) pays: GABON, AFRIQUE DU SUD & MAROC. Bientôt dans d'autres pays."
          picture="/img/apropos-pic2.jpg"
        />
        <div className="divMiddle">
          {ListeGrille.map((grille) => (
            <GrilleComponent
              key={grille.texteTitre.length}
              position={grille.position}
              texteTitre={grille.texteTitre}
              colorTitre={grille.colorTitre}
              paragraphe={grille.paragraphe}
              picture={grille.picture}
            />
          ))}

          <Link href="contact">
            <a>
              <Bouton
                texte="COMMENCEZ MAITENANT "
                backgroundcolor="#007bff"
                bordercolor="007bff"
                color="#fff"
                icon="true"
              />
            </a>
          </Link>
        </div>
        <GrilleComponent
          position="right"
          texteTitre="Dsponible dans 3 pays d'Afrique"
          colorTitre="#007bff"
          paragraphe="Nous sommes actuellement présents dans 3 pays d'Afrique: Gabon,Afrique du Sud et le Maroc. 
          Notre conquête ne s'arrête pas, nous visons de conquérir d'autre pays dans un intervalle de temps bien court.
           Restez informer et abonnez-vous sur notre Newsletter pour ne manquer aucune information sur XPATSA."
          picture="/img/apropos-pic2.jpg"
        />
      </Container>
    </Wrapper>
  );
}
