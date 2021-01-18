import Link from "next/link";
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import FormLogin from "../components/shared/formLogin/formLogin";

const Wrapper = styled(Container)`
  background: #fbfbfb;
  height: 80vh;

  .card {
    border-color: #ecedee;
    border-radius: 0px;
    padding: 20px;
    @media (min-width: 900px) {
      width: 50%;
      height: 50%;
    }
  }
`;

export default function Connexion() {
  return (
    <Wrapper fluid>
      <Row className="h-100">
        <Col className="h-100 d-flex align-items-center justify-content-center">
          <Card className="">
            <FormLogin />
          </Card>
        </Col>
      </Row>
    </Wrapper>
  );
}
