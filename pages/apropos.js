import Link from 'next/link'
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import ImageAccueil from "../components/shared/ImageAccueil/ImageAccueil";
import Bouton from "../components/shared/Bouton/Bouton";
import GrilleComponent from "../components/shared/grilleComponent/grilleComponent";


const Wrapper = styled.div`
    .row
    {
        margin:0px;
    }

    button
    {
        margin:20px auto;
        display:block;
    }

    .divMiddle
    {
        background:#f8f8f8; 
        padding-bottom:20px;
    }
`;

const ListeGrille = [
    {
        position: "left",
        texteTitre: "Aide aux etudiants",
        colorTitre:"#007bff",
        paragraphe:"Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients.",
        picture:"/img/apropos-pic5.jpg"
    },
    {
        position: "right",
        texteTitre: "Aides médicales",
        colorTitre:"#007bff",
        paragraphe:"Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients.",
        picture:"/img/apropos-pic3.jpg"
    },
    {
        position: "left",
        texteTitre: "Aide pour VISA et Carte de séjours",
        colorTitre:"#007bff",
        paragraphe:"Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients.",
        picture:"/img/apropos-pic4.jpg"
    }
   ]

export default function Apropos() {
  return (
        <Wrapper>
            <Row>
                <Col sm={12}>
                    <ImageAccueil />
                </Col>
            </Row>
            <Container>
            <GrilleComponent 
                    position="right" 
                    texteTitre="XPATSA"
                    colorTitre="#007bff"
                    paragraphe="Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients."
                    picture="/img/apropos-pic1.svg"  
                    />
                <div className="divMiddle">
                    {ListeGrille.map(grille => <GrilleComponent 
                        key={grille.texteTitre.length} 
                        position={grille.position} 
                        texteTitre={grille.texteTitre} 
                        colorTitre={grille.colorTitre}
                        paragraphe={grille.paragraphe}
                        picture={grille.picture}  
                        />
                    )}
                    <Bouton 
                    texte="COMMENCEZ MAITENANT "
                    backgroundColor="#007bff"
                    borderColor="007bff"
                    color="#fff"
                    icon="true"
                />
               </div>
               <GrilleComponent 
                    position="right" 
                    texteTitre="Dsponible dans 3 pays d'Afrique"
                    colorTitre="#007bff"
                    paragraphe="Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients."
                    picture="/img/apropos-pic2.jpg"  
                    />
            </Container>
        </Wrapper>
  )
}