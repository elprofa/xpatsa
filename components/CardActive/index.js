import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import CardStc from './Card.stc';
//import InputGroup from "../inputGroup";
import { InputGroupAddon, InputGroup, Button, Input } from 'reactstrap';
import { FiUsers } from 'react-icons/fi';
import { BsArrowUp } from 'react-icons/bs';


const CardActive = (props) => {

    //const { textLabel } = props;

        return (
            <CardStc >
                <Card className='cardInfos'>
                    <Row className='d-flex'>
                        <Col className='iconsCol m-1 mt-5' lg={1}>
                            <FiUsers className='icons d-flex p-1 mt-1' size={'50px'} color='#023DDC' />
                        </Col>
                        <Col className='divTexte my-0 ml-3' lg={10}>
                            <CardBody>
                                <CardTitle tag="h3">Active Clients</CardTitle>
                                <CardText><span className='number'>405</span><br></br>
                                <span className='details'>0.5 % <BsArrowUp size={'23px'} color='#3CE99E'/></span><span className='more-details text-muted'>than yesterday</span>
                                </CardText>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </CardStc>
        )
    };

export default CardActive;