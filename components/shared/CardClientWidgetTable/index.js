import CardClientWidgetTableStc from './CardCircleWidgetTable.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import { gql, useQuery } from '@apollo/client';

const LISTE_CLIENT=gql`
 query 
{ 
	clients
  { 
  	name
    firstname
    pays
    telephone
  }
}
`;

const CardClientWidgetTable =()=>{

    const {data,error,loading}=useQuery(LISTE_CLIENT);

    if(loading){
        return <p>Loading</p>
    }
    if(error){
        return <p>Erreur</p>
    }
    console.log(data);
    return(
        <CardClientWidgetTableStc>
            <h2 className="cardTitre">Clients</h2>
            <Row className="cardActiviteHead">
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom complet</th>
                        <th>Pays</th>
                        <th>Téléphone</th>
                        <th>Transaction/Date</th>
                        <th>Transaction ID</th>
                        <th>Montant</th>
                        
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.clients.map((client,index)=>(
                            <tr key={index}>
                                <td scope="row" className="pictureClient">
                                    <Link href="/">
                                        <Image src="/img/wedo.jpg" width={40} height={40} />
                                    </Link>
                                </td>
                                <td>{client.name} {client.firstname}</td>
                                <td>{client.pays}</td>
                                <td>*****</td>
                                <td>*****</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td></td>
                            </tr>
                        )
                    )
                    }
                </tbody>
                </Table>
            </Row>
            
        </CardClientWidgetTableStc>
    )
}
export default CardClientWidgetTable;