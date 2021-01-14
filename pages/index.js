import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { Form, Container, Row, Col } from "reactstrap";

import { initializeApollo } from "../apollo/client";
import Titre from "../components/shared/Titre/Titre";
import Bouton from "../components/shared/Bouton/Bouton";

import ButtonText from "../components/buttonText";
import InputGroup from "../components/shared/inputGroup";
import FormLogin from "../components/shared/formLogin/formLogin";
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
            <FormLogin />
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
