import CardTransactionWidgetTableStc from './CardTransactionWidgetTable.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { BsCheckCircle } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const LISTE_TRANSACTION=gql`
    query 
    { 
        transactions 
        { 
            id
            sent
            from
            received
            to
            fees
            total
            created_at
            updated_at
            paid
            client
            { 
                name
                firstname
            }
        }
    }
`;

const CardTransactionWidgetTable =()=>{

    const {data,error,loading}=useQuery(LISTE_TRANSACTION);

    if(loading){
        return <p>Loading</p>
    }
    if(error){
        return <p>Erreur</p>
    }

    console.log(data)
    return(
        <CardTransactionWidgetTableStc>
            <h2 className="cardTitre">Transactions</h2>
            <Row className="cardActiviteHead">
            <Table>
                <thead>
                    <tr>
                        <th>Client</th>
                        <th>A envoyer</th>
                        <th>A recevoir</th>
                        <th>Frais</th>
                        <th>Coût total</th>
                        <th>Payé ?</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        data.transactions.map(transaction=>(<tr key={transaction.id}>
                        <td className="client"> 
                            <span>
                            {
                                transaction?.client?.firstname!=="undefined"?transaction?.client?.firstname:" " 
                                
                            }
                            </span>
                            <span>
                            {
                                transaction?.client?.name!=="undefined"?transaction?.client?.name:""
                            }
                            </span>
                        </td>
                        <td> {transaction.sent+" "+transaction.from} </td>
                        <td> {transaction.received+" "+transaction.to} </td>
                        <td> {transaction.fees} </td>
                        <td> {transaction.total} </td>
                        <td> { transaction.paid?<span className="yes"><BsCheckCircle /></span>:<span className="no">-</span> } </td>
                        <td>
                            <span>
                                <Link href="/transaction">
                                    <a>
                                    <BsPencilSquare />
                                    </a>
                                </Link>
                            </span>
                        </td>
                        </tr>
                        ))
                    }

                    
                </tbody>
                </Table>
            </Row>
            
        </CardTransactionWidgetTableStc>
    )
}
export default CardTransactionWidgetTable;