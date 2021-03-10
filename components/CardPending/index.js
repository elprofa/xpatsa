import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import CardStc from './CardPending.stc';
import { BsArrowUp } from 'react-icons/bs';


const CardPending = (props) => {

    //const { textLabel } = props;

        return (
            <CardStc >
                <Card className='cardInfos'>
                            <CardBody>
                                <Row>
                                    <CardTitle><h3>Pending Ticket</h3><span>120</span></CardTitle><br></br>
                                    <div className='barr'></div>
                                </Row>
                                <CardText>
                                    <span className='details'>0.5 % <BsArrowUp size={'23px'} color='#3CE99E'/></span>
                                    <span className='more-details text-muted'>than yesterday</span>
                                </CardText>
                            </CardBody>
                </Card>
            </CardStc>
        )
    };

export default CardPending;