import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { Form, Container, Row, Col } from "reactstrap";

import { initializeApollo } from "../apollo/client";

import PiedDePage from "../components/footer";
import FormLogin from "../components/shared/formLogin/formLogin";

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
            You're signed in as {viewer.name} anxd you're wedo {viewer.status}{" "}
            goto{" "}
            <Link href="/connexion">
              <a>static</a>
            </Link>{" "}
            page.
          </Col>
          <Col></Col>
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
