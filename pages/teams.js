import Link from 'next/link'
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import FormTeam from '../components/shared/formTeam';
import TableauTeam from '../components/shared/tableauTeam';

const Wrapper = styled.div`

  background: #fbfbfb;
  margin:0px;

  .container{
    margin:40px auto;
  }
 
`;

export default function Team() {
  return (
      <Wrapper>
        <Container>
            <Row>
              <Col>
                  <FormTeam />
              </Col>
            </Row>
            <Row>
                <Col>
                    <TableauTeam />
                </Col>
            </Row>
        </Container>
      </Wrapper>
  )
}