import Link from 'next/link'
import { Row,Col,Card} from "reactstrap";
import FormLogin from "../components/shared/formLogin/formLogin";
export default function Connexion() {
  return (
      <Row style={{ background: '#fbfbfb',margin:'0px' }}>
        <Col>
          <Card style={{ width: '30rem',margin:'70px auto',padding:'20px',borderColor:'#ecedee;' }}>
            <FormLogin />
          </Card>
        </Col>
      </Row>
  )
}
