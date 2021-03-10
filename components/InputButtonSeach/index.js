import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import ButtonSearchStc from './inputButtonSeach.stc';
//import InputGroup from "../inputGroup";
import { InputGroupAddon, InputGroup, Button, Input } from 'reactstrap';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = (props) => {

    //const { textLabel } = props;

        return (
            <ButtonSearchStc >
                <Row className='divTexte'>
                    <Col lg={4} className='cols h-100 d-flex align-items-center justify-content-center colSearch'>
                        <InputGroup textLabel={'SEARCH'}>
                        <Button color="#E2E2E2" className='btnSearch' ><AiOutlineSearch size={'35px'}/></Button>
                        <Input placeholder='Search'/>
                        <InputGroupAddon addonType="append" className='inputSearch'>
                        </InputGroupAddon>
                        </InputGroup>                       

                    </Col>
                </Row>
            </ButtonSearchStc>
        )
    };

export default Search;