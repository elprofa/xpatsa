import CardTotalAmoutTransactionStc from './CardTotalAmoutTransaction.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col} from 'reactstrap';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

export const LISTE_TRANSACTION_BOX=gql`
query
{
  transactions
  { 
  	id
      total
  }
}
`;

const CardTotalAmoutTransaction =(props)=>{

    const {data,error,loading}=useQuery(LISTE_TRANSACTION_BOX);

   const countClient=data?.transactions?.length;
    let total=0;
   for (let index = 0; index < countClient; index++) {
       var n=data?.transactions[index]?.total;
    total=total+parseInt(n);
   }


   console.log(total);
    return(
        <CardTotalAmoutTransactionStc>
            <Row>
                <Col sm={4} className="col-4">
                    <span className="spanIcon"><FaUserFriends/></span>
                </Col>
                <Col sm={8} className="col-8">
                    <h4>Montant total</h4>
                    <h2>{total}</h2>
                    <p className="action"><span action>13%</span> than last Month</p>
                </Col>
            </Row>
        </CardTotalAmoutTransactionStc>
    )
}
export default CardTotalAmoutTransaction;