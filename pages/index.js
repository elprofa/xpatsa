import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { Form, Container, Row, Col } from "reactstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

import { initializeApollo } from "../apollo/client";
import Titre from "../components/Titre/Titre";
import ButtonText from "../components/buttonText";
import InputGroup from "../components/inputGroup";
import SocialMediaIcons from '../components/socialMedia';
import PiedDePage from '../components/footer';

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`;

const Index = () => {
  const {
    data: { viewer },
  } = useQuery(ViewerQuery);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            You're signed in as {viewer.name} and you're yes {viewer.status}{" "}
            goto{" "}
            <Link href="/about">
              <a>static</a>
            </Link>{" "}
            page.
          </Col>
          <Col>
            <Form>
              <Titre text="Bonjour à tous" />
              <InputGroup />
              <Row>
                <Col sm={5}>
                  <ButtonText text="Mot de Passe oublié ?" />
                </Col>
                <Col sm={4}>
                </Col>
                <Col sm={1}></Col> 
                <Col sm={1}></Col>
                <Col sm={1}></Col>
                
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ViewerQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
