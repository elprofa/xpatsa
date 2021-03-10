import React from 'react';
import {Row,Col} from 'reactstrap';
import { FaRocketchat } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import MonBouton from '../shared/Bouton/Bouton';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadBarStc from './HeadBar.stc';
import Image from 'next/image';
import Link from 'next/link';
import { BiMenu } from "react-icons/bi";
import CardWidget from '../shared/CardWidget';
import DateFilter from '../shared/DateFilter';


const HeadBar =(props)=>{
    const hideNavBar=()=>{
        var element=document.getElementById("sidebar");
 
        element.classList.toggle("hidden");

        var cls=element.className;
        var search=cls.search('hidden');
        console.log(search);

        var element1=document.getElementById("iconCloseAsideBar");

        if(search!=-1)
        {
            element1.className = "iconActive";
        }
        else
        {
            element1.className = "";
        }
    }
    return (
        <HeadBarStc className="navbar navbar-default">
            <div className="container-fluid">

                <div className="navbar-header">
                    <Row>
                        <Col lg={5} md={6} className="divSearch">
                            <span className="MenuHamburgerAdmin" onClick={hideNavBar}><BiMenu /></span>
                            <span className="iconSearch">
                                <FaSearch/>
                            </span>
                           <input type="texte" className="form-control" placeholder="recherche ici ...." />
                        </Col>
                        <Col md={4} lg={2} className="divBoutonNew">
                           <MonBouton backgroundcolor="#2362bf" texte="Nouvelle transaction" />
                        </Col>
                        <Col lg={3} md={4} className="divIconNotification">
                           <a>
                                <span>
                                    <FaRocketchat />
                                    <i className="badge">2</i>
                                </span>
                                
                           </a>
                           <a>
                                <span>
                                    <FaRegBell />
                                    <i className="badge">2</i>
                                </span>
                                
                            
                           </a>
                        </Col>
                        <Col lg={2} md={4} className="divPeviewProfil">
                            <div className="profilNameRole">
                                <h3>Hello Mary</h3>
                                <span>Super Admin</span>
                            </div>
                            <div className="profilPicture">
                                <Link href="/">
                                    <Image src="/img/wedo.jpg" width={130} height={130} />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <CardWidget />
                        </Col>
                        <Col lg={3}>
                            <CardWidget />
                        </Col>
                        <Col lg={3}>
                            <CardWidget />
                        </Col>
                        <Col lg={3}>
                            <DateFilter />
                        </Col>
                    </Row>
                    
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Page</a></li>
                    </ul>
                </div>
            </div>
        </HeadBarStc>
    )
}
export default HeadBar;