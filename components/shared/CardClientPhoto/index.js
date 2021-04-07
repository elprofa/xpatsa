import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import CardClientPhotoStc from './CardClientPhoto.stc';
import {BsEye } from "react-icons/bs";

export default function CardClientPhoto(props) {

 
  return (
      <CardClientPhotoStc>
            <Row>
                <Col lg={3}>
                    <p className="label">Photo du client</p>
                    <div className="cadrePhoto">
                        <Image src="/img/wedo.jpg" width="220" height="220" />
                    </div>
                    <form>
                        <input className="form-control" type="file" />
                    </form>
                </Col>
            </Row>
            
      </CardClientPhotoStc>
  )
}