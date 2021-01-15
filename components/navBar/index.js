import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import { Rangernavb } from './navbar.stc';

const TopMenu = (props) => {
    const { text } = props;
    return <Rangernavb>{text}
    <Navbar bg="transparent" variant="lihgt">
    <Navbar.Brand href="#Tranfert d'argent">Tranfert d'argent</Navbar.Brand>
    <Nav className="d-flex justify-content-center">
      <Nav.Link href="#a propos">A propos</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      <Nav.Link href="#s'inscrire">S'inscrire</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-dark">Se connecter</Button>
    </Form>
  </Navbar>
  </Rangernavb>;
  };
  
  export default TopMenu;
