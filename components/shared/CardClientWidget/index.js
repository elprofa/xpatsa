import CardClientWidgetStc from './CardClientWidget.stc';
import { FaRegEnvelope } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import {Row,Col} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';

const CardClientWidget =()=>{
    return(
        <CardClientWidgetStc>
            <h2 className="cardTitre">Nouveaux clients</h2>
            <Row className="lineClient">
                <Col sm={9}>
                    <div className="profilPicture">
                        <Link href="/">
                            <Image src="/img/wedo.jpg" width={40} height={40} />
                        </Link>
                    </div>
                    <div className="profilNameRole">
                        <h3>Hello Mary</h3>
                        <span>Super Admin</span>
                    </div>

                </Col>
                <Col sm={3}>
                    <span className="spanMessage"><FaRegEnvelope /></span>
                </Col>
            </Row>
            <Row className="lineClient">
                <Col sm={9}>
                    <div className="profilPicture">
                        <Link href="/">
                            <Image src="/img/wedo.jpg" width={40} height={40} />
                        </Link>
                    </div>
                    <div className="profilNameRole">
                        <h3>Hello Mary</h3>
                        <span>Super Admin</span>
                    </div>

                </Col>
                <Col sm={3}>
                    <span className="spanMessage"><FaRegEnvelope /></span>
                </Col>
            </Row>
            <Row className="lineClient">
                <Col sm={9}>
                    <div className="profilPicture">
                        <Link href="/">
                            <Image src="/img/wedo.jpg" width={40} height={40} />
                        </Link>
                    </div>
                    <div className="profilNameRole">
                        <h3>Hello Mary</h3>
                        <span>Super Admin</span>
                    </div>

                </Col>
                <Col sm={3}>
                    <span className="spanMessage"><FaRegEnvelope /></span>
                </Col>
            </Row>
            <Row className="lineClient">
                <Col sm={9}>
                    <div className="profilPicture">
                        <Link href="/">
                            <Image src="/img/wedo.jpg" width={40} height={40} />
                        </Link>
                    </div>
                    <div className="profilNameRole">
                        <h3>Hello Mary</h3>
                        <span>Super Admin</span>
                    </div>

                </Col>
                <Col sm={3}>
                    <span className="spanMessage"><FaRegEnvelope /></span>
                </Col>
            </Row>
            <Row className="lineClient">
                <Col sm={9}>
                    <div className="profilPicture">
                        <Link href="/">
                            <Image src="/img/wedo.jpg" width={40} height={40} />
                        </Link>
                    </div>
                    <div className="profilNameRole">
                        <h3>Hello Mary</h3>
                        <span>Super Admin</span>
                    </div>

                </Col>
                <Col sm={3}>
                    <span className="spanMessage"><FaRegEnvelope /></span>
                </Col>
            </Row>
            <a className="btnVoirPlus">
                Voir plus <span><FaChevronRight/></span>
            </a>
        </CardClientWidgetStc>
    )
}
export default CardClientWidget;