import CardActivityWidgetStc from './CardActivityWidget.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col,Table} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import Bouton from '../Bouton/Bouton';


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
                    <td>Kito Soyinka</td>
                    <td>18/05/2018 3:01 AM</td>
                    <td>@mdo</td>
                    <td><Bouton color={'danger'} texte={'Panding'}minwidth={'30px'} backgroundcolor={'danger'} /></td>
                    </tr>
                    <tr>
                    <th scope="row" className="pictureClient">
                        <Link href="/">
                            <Image src="/img/wedo.jpg" width={40} height={40} />
                        </Link>
                    </th>
                    <td>Michel Marion</td>
                    <td>18/05/2021 3:01 PM</td>
                    <td>@fat</td>
                    <td><Bouton color={'primary'} texte={'Completed'} minwidth={'30px'} backgroundcolor={'danger'} /></td>
                    </tr>
                    <tr>
                    <th scope="row" className="pictureClient">
                        <Link href="/">
                            <Image src="/img/wedo.jpg" width={40} height={40} />
                        </Link>
                    </th>
                    <td>Omari Akunylili</td>
                    <td>18/05/2021 6:01 PM</td>
                    <td>@twitter</td>
                    <td><Bouton color={'success'} texte={'Completed'} minwidth={'30px'} backgroundcolor={'danger'} /></td>
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