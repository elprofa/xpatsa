import Link from 'next/link';
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import CardTransactionDetailStc from './CardTransactionDetail.stc';
import {BsEye } from "react-icons/bs";

export const SINGLE_TRANSACTION=gql`
    query SINGLE_TRANSACTION($id:ID!)
    { 
        transaction(id:$id)
        {
            id
            created_at
            updated_at
            sent
            received
            from
            to
            fees
            total
            otherFees
            modalite
            paid
            client{ 
                id
                name
                firstname
                telephone
            }
        }
    }
`;

export default function DetailTransaction(props) {

    const {data,error,loading}=useQuery(SINGLE_TRANSACTION,{
        variables:{
            id:props.id_transaction
        }
    });


    if(error){
        return <p>Erreur</p>
    }
    if(loading)
    {
        return <p>Chargement</p>
    }

    const transaction=data.transaction;
  return (
      <CardTransactionDetailStc>
            <Row>
                <Col lg={4} className="blockCol">
                    <p className="label">Id transaction :</p>
                    <p className="value">
                        #{transaction.id}
                    </p>
                </Col>
                <Col lg={4} className="blockCol">
                    <p className="label">Créée le :</p>
                    <p className="value">
                        {transaction.created_at}
                    </p>
                </Col>
                <Col lg={4} className="blockCol">
                    <p className="label">Dernière mise à jours le : </p>
                    <p className="value">
                        {transaction.updated_at}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col lg={4} className="blockCol">
                    <p className="label">Montant envoyé :</p>
                    <p className="value">
                        {transaction.sent} {transaction.from}
                    </p>
                </Col>
                <Col lg={4} className="blockCol">
                    <p className="label">Montant à recevoir :</p>
                    <p className="value">
                        {transaction.received} {transaction.to}
                    </p>
                </Col>
                <Col lg={4} className="blockCol">
                    <p className="label">Frais de transaction : </p>
                    <p className="value">
                        {transaction.fees} {transaction.from}
                    </p>
                </Col>
                <Col lg={3} className="blockCol">
                    <p className="label">Autres frais : </p>
                    <p className="value">
                        {transaction.otherFees} {transaction.from}
                    </p>
                </Col>
                <Col lg={3} className="blockCol">
                    <p className="label">Modalités de paiement : </p>
                    <p className="value">
                        {transaction.modalite} 
                    </p>
                </Col>
                <Col lg={3} className="blockCol">
                    <p className="label">Total : </p>
                    <p className="value">
                        {transaction.total} {transaction.from}
                    </p>
                </Col>
                <Col lg={3} className="blockCol">
                    <p className="label">Statut : </p>
                    <p className="value">
                        {transaction.paid?<span className="yes">Payé</span>:<span className="no">Non Payé</span>}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col lg={8} className="blockCol">
                    <p className="label">Prénom et Nom du client : </p>
                    <p className="value">
                    {transaction?.client?.firstname} {transaction?.client?.name} <span className="iconDetailUser" title="Détail du client"><Link href={"/client/"+transaction?.client?.id}><a ><BsEye /></a></Link></span>
                    </p>
                </Col>
                
                <Col lg={4} className="blockCol">
                    <p className="label">Téléphone du client : </p>
                    <p className="value">
                        {transaction.telephone} 

                    
                    </p>
                </Col>
            </Row>
            
            <Row classNamerowAction>
                <Col lg={8}></Col>
                <Col lg={4}>
                    <Link href={"/transaction/update/"+props.id_transaction}><a className="btn">Modifier la transaction</a></Link>
                </Col>
            </Row>
      </CardTransactionDetailStc>
  )
}