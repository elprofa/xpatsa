import CardClientWidgetStc from './CardClientWidget.stc';
import { FaRegEnvelope } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import {Row,Col} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { BsPencilSquare,BsEye } from "react-icons/bs";


const LISTE_CLIENT=gql`
    query 
    { 
        clients (limit:14,sort:"id:desc")
        { 
            id
            firstname
            name
        }
    }
`;

const CardClientWidget =()=>{
    const {data,error,loading}=useQuery(LISTE_CLIENT);
    if(loading){
        return <p>Loading</p>
    }
    if(error){
        return <p>Erreur</p>
    }
    return( 
        <CardClientWidgetStc>
            <h2 className="cardTitre">Nouveaux clients</h2>

            {
                data?.clients.map((client,index)=>(
                <Row className="lineClient" key={index}>
                    <Col sm={9}>
                        <div className="profilPicture">
                            <Link href="/">
                                <Image src="/img/avatar.png" width={40} height={40} />
                            </Link>
                        </div>
                        <div className="profilNameRole">
                            <h3>{ client.firstname } </h3>
                            <span>{ client.name }</span>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <Link href={"/client/"+client?.id}>
                            <a className="btnVoirPlus">
                                <span className="spanMessage"><BsEye /></span>
                            </a>
                        </Link>
                    </Col>
                </Row>
                ))
            }
            <Link href="/clients">
                    <a className="btnVoirPlus">
                        Voir plus <span><FaChevronRight/></span>
                    </a>
                </Link>
        </CardClientWidgetStc>
    )
}
export default CardClientWidget;