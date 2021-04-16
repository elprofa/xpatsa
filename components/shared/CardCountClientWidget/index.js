import CardCountClientWidgetStc from './CardCountClientWidget.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col} from 'reactstrap';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

export const LISTE_CLIENT_BOX=gql`
query
{
  clients
  { 
  	id
    transactions
    {
      id
    }
  }
}
`;

const CardCountClientWidget =(props)=>{

    const {data,error,loading}=useQuery(LISTE_CLIENT_BOX);

   const countClient=data?.clients?.length;

   let total=0;
   for (let index = 0; index < countClient; index++) {
      console.log(typeof data?.clients?.transactions)
    if(data?.clients[index]?.transactions!="")
    {
        total++;
    }
       
   }

    return(
        <CardCountClientWidgetStc>
            <Row>
                <Col sm={4} className="col-4">
                    <span className="spanIcon"><FaUserFriends/></span>
                </Col>
                <Col sm={8} className="col-8">
                    <h4>Clients actifs</h4>
                    <h2>{total}</h2>
                    <p className="action">Sur <span action>{countClient}</span> au total </p>
                </Col>
            </Row>
        </CardCountClientWidgetStc>
    )
}
export default CardCountClientWidget;