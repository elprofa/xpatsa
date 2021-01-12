import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { Form, Container, Row, Col } from "reactstrap";

import { initializeApollo } from "../apollo/client";
import Titre from "../components/Titre/Titre";
import ButtonText from "../components/buttonText";
import InputGroup from "../components/inputGroup";

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
              <ButtonText text="HelloWord" />
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
