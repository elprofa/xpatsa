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
  }
}
`;

const CardCountClientWidget =(props)=>{

    const {data,error,loading}=useQuery(LISTE_CLIENT_BOX);

   const countClient=data?.clients?.length;

    return(
        <CardCountClientWidgetStc>
            <Row>
                <Col sm={4} className="col-4">
                    <span className="spanIcon"><FaUserFriends/></span>
                </Col>
                <Col sm={8} className="col-8">
                    <h4>Total client</h4>
                    <h2>{countClient}</h2>
                    <p className="action"><span action>13%</span> than last Month</p>
                </Col>
            </Row>
        </CardCountClientWidgetStc>
    )
}
export default CardCountClientWidget;