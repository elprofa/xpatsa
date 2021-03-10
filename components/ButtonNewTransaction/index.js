import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import ButtonSearchStc from './inputButtonSeach.stc';
//import InputGroup from "../inputGroup";
import { InputGroupAddon, InputGroup, Button, Input } from 'reactstrap';
import { AiOutlineSearch } from 'react-icons/ai';

const NewTransaction = (props) => {

    //const { textLabel } = props;

        return (
            <ButtonSearchStc >
                <Row className='divTexte'>
                    <Col lg={5} className='cols h-100 d-flex align-items-center justify-content-center colSearch'>
                        
                        <Button color="primary" className='btnSearch' >Create new transaction</Button>                      

                    </Col>
                </Row>
            </ButtonSearchStc>
        )
    };

export default NewTransaction;