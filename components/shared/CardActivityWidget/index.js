import CardActivityWidgetStc from './CardActivityWidget.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import { BsPencilSquare,BsEye } from "react-icons/bs";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

 
const LISTE_TRANSACTION=gql`
query 
{ 
    transactions(limit:10)
    {
        id
        created_at
        total
        fees
        client
        { 
            firstname
            name
        }
    }
}
`;


const CardActivityWidget =()=>{

    const {data,error,loading}=useQuery(LISTE_TRANSACTION);

    if(loading){
        return <p>Loading</p>
    }
    if(error){
        return <p>Erreur</p>
    }
    return(
        <CardActivityWidgetStc>
            <h2 className="cardTitre">Activités</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Date de l'operation</th>
                        <th>Montant total</th>
                        <th>frais</th>
                        <th>Client</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        data.transactions.map((transaction)=>(
                            <tr key={transaction.id}>
                                
                                <td>{transaction.created_at}</td>
                                <td>{transaction.total}</td>
                                <td>{transaction.fees}</td>
                                <td>{transaction?.client?.firstname} {transaction?.client?.name}</td>
                                <td><span><Link href={"/transaction/"+transaction?.id}><a><BsEye /></a></Link></span>
                                </td>
                            </tr>
                        ))

                    }
                </tbody>
                </Table>
                <Link href="/transactions">
                    <a className="btnVoirPlus">
                        Voir plus <span><FaChevronRight/></span>
                    </a>
                </Link>
            
        </CardActivityWidgetStc>
    )
}
export default CardActivityWidget;