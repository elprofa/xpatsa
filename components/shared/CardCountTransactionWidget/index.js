import CardCountTransactionWidgetStc from './CardCountTransactionWidget.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col} from 'reactstrap';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { FaRegCreditCard } from "react-icons/fa";

export const LISTE_TRANSACTION_BOX=gql`
query
{
  transactions(where:{paid:true})
  { 
  	id
  }
}
`;

export const LISTE_TRANSACTION_TOTAL=gql`
query
{
  transactions
  { 
  	id
  }
}
`;

const CardCountTransactionWidget =(props)=>{

    const {data,error,loading}=useQuery(LISTE_TRANSACTION_BOX);
    const res=useQuery(LISTE_TRANSACTION_TOTAL);

    if(error) { return <p>Erreur</p>}
    if(error) { return <p>Chargement ...</p>}
    const countTransaction=data?.transactions?.length;
    const countTransactionTotal=res?.data?.transactions?.length;

    return(
        <CardCountTransactionWidgetStc>
            <Row>
                <Col sm={4} className="col-4">
                    <span className="spanIcon"><FaRegCreditCard /></span>
                </Col>
                <Col sm={8} className="col-8">
                    <h4>Transactions payées</h4>
                    <h2>{data?.transactions?.length}</h2>
                    <p className="action">Sur  <span action> {countTransactionTotal} </span> au total</p>
                </Col>
            </Row>
        </CardCountTransactionWidgetStc>
    )
}
export default CardCountTransactionWidget;