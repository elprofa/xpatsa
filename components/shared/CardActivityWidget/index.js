import CardActivityWidgetStc from './CardActivityWidget.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";


const CardActivityWidget =()=>{
    return(
        <CardActivityWidgetStc>
            <h2 className="cardTitre">Activités</h2>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom complet</th>
                        <th>Transaction/Date</th>
                        <th>Pays</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row" className="pictureClient">
                        <Link href="/">
                            <Image src="/img/wedo.jpg" width={40} height={40} />
                        </Link>
                    </th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row" className="pictureClient">
                        <Link href="/">
                            <Image src="/img/wedo.jpg" width={40} height={40} />
                        </Link>
                    </th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row" className="pictureClient">
                        <Link href="/">
                            <Image src="/img/wedo.jpg" width={40} height={40} />
                        </Link>
                    </th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
                </Table>
            <a className="btnVoirPlus">
                Voir plus <span><FaChevronRight/></span>
            </a>
            
        </CardActivityWidgetStc>
    )
}
export default CardActivityWidget;