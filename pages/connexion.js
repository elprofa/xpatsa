import Link from 'next/link'
import { Row,Col,Card} from "reactstrap";
import styled from "styled-components";
import FormLogin from "../components/shared/formLogin/formLogin";

const Wrapper = styled(Row)`

  background: #fbfbfb;
  margin:0px;

  .card{
    width: 30rem;
    margin:70px auto;
    padding:20px;
    border-color:#ecedee;
    border-radius:0px;
  }
 
`;

export default function Connexion() {
  return (
      <Wrapper>
        <Col>
          <Card>
            <FormLogin />
          </Card>
        </Col>
      </Wrapper>
  )
}
