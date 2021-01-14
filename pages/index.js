import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { Form, Container, Row, Col } from "reactstrap";

import { initializeApollo } from "../apollo/client";
import Titre from "../components/shared/Titre/Titre";
import Bouton from "../components/shared/Bouton/Bouton";

import ButtonText from "../components/buttonText";
import InputGroup from "../components/shared/inputGroup";

import DropoDownInput from "../components/shared/dropDownInput/dropDownInput";

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
            <Bouton texte="Bonjour à tous" backgroundColor="green" color="#fff" icon="true"/>
            You're signed in as {viewer.name} and you're wedo {viewer.status}{" "}
            goto{" "}
            <Link href="/about">
              <a>static</a>
            </Link>{" "}
            page.
          </Col>
          <Col>
            <Form>
              <Titre texte="Bonjour à tous" color="#ff0000" underline="2"/>
              <InputGroup textLabel="Date de naissance" typeInput="date" nameInput="date_naiss" idInput="date_naiss" valueInput="RAS"/>
              <ButtonText text="HelloWord" />
              
              <DropoDownInput textLabel="Bonjour à vous" OptionList ={[{item: "eldi",value: "logo"},{item: "ray",value: "logo"}]}/>
              <Titre texte="Bonjour à tous" color="blue" underline="2"/>
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
