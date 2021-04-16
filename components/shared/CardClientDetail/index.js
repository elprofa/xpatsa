import Link from 'next/link';
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import CardClientDetailStc from './CardClientDetail.stc';
import {BsEye } from "react-icons/bs";
import moment from 'moment';

export const SINGLE_CLIENT=gql`
    query SINGLE_CLIENT($id:ID!)
    { 
        client(id:$id)
        {
            id
            name
            firstname
            telephone
            pays
            Ville
            created_at
            updated_at
        }
        
    }
`;

export default function DetailClient(props) {

    const {data,error,loading}=useQuery(SINGLE_CLIENT,{
        variables:{
            id:props.id_client
        }
    });


    if(error){
        return <p>Erreur</p>
    }
    if(loading)
    {
        return <p>Chargement</p>
    }

    const client=data.client;
  return (
      <CardClientDetailStc>
            <Row>
                <Col lg={4}>
                    <p className="label">Id client :</p>
                    <p className="value">
                        #{client.id}
                    </p>
                </Col>
                <Col lg={4}>
                    <p className="label">Crée le :</p>
                    <p className="value">
                        {moment(client.created_at).format('DD/MM/YYYY - hh:mm:ss')}
                    </p>
                </Col>
                <Col lg={4}>
                    <p className="label">Dernière mise à jours le : </p>
                    <p className="value">
                        {moment(client.updated_at).format('DD/MM/YYYY - hh:mm:ss')}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <p className="label">Nom:</p>
                    <p className="value">
                        {client.name}
                    </p>
                </Col>
                <Col lg={4}>
                    <p className="label">Prénom :</p>
                    <p className="value">
                        {client.firstname}
                    </p>
                </Col>
                <Col lg={4}>
                    <p className="label">Téléphone : </p>
                    <p className="value">
                        {client.telephone}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <p className="label">Pays:</p>
                    <p className="value">
                        {client.pays}
                    </p>
                </Col>
                <Col lg={4}>
                    <p className="label">Ville :</p>
                    <p className="value">
                        {client.Ville}
                    </p>
                </Col>
                
            </Row>
            <Row classNamerowAction>
                <Col lg={8}></Col>
                <Col lg={4}>
                    <Link href={"/client/update/"+props.id_client}><a className="btn">Modifier le client</a></Link>
                </Col>
            </Row>
      </CardClientDetailStc>
  )
}