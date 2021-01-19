import { Container, Row, Col, Card } from "reactstrap";
import { BsFillStopwatchFill } from "react-icons/bs";
import BlockDevise from "../BlockDevise/BlockDevise";




const ListeDevises = [
    {
        titre: "RAPIDITE",
        color:"#007bff",
        paragraphe:"Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients.",
        icon:"1"
    },
    {
      titre: "SECURISE",
      color:"#007bff",
      paragraphe:"Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients.",
      icon:"2"
  },
  {
    titre: "EFFICACITE",
    color:"#007bff",
    paragraphe:"Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients.",
    icon:"3"
  }
  ];
const ComponentBlockDevise = (props) => {
  return(
    <section>
        <Container>
            <Row>
            {ListeDevises.map(devise => <Col lg={4}><BlockDevise 
                key={devise.titre.length} 
                color={devise.color} 
                paragraphe={devise.paragraphe}
                icon={devise.icon} 
                titre={devise.titre}  
                />
                </Col>
            )}
            </Row>
        </Container>
    </section>
  )
};

export default ComponentBlockDevise;