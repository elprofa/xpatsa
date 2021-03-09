import React from 'react';
import NavStc from './AsideBar.stc';
import Image from 'next/image';
import Link from 'next/link';
import { FaDelicious } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaBezierCurve } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import MonBouton from '../shared/Bouton/Bouton';
import { FaCircle } from "react-icons/fa";


const AsideBar=(props)=>{
    return (
        <NavStc id="sidebar" className="">
            <div className="sidebar-header">
                <Link href="/">
                    <Image src="/img/Logo_Xpatsa.png" width={80} height={80} />
                </Link>
                
            </div>
            <span id="iconCloseAsideBar" className="" onClick={props.hideNavBar}><FaCircle /></span>
            <ul className="list-unstyled components">
                <li className="active">
                    <a href="#homeSubmenu" >
                        <i ><FaDelicious /></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i><FaUserFriends/></i>
                        <span>Clients</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i><FaRegCreditCard /></i>
                        <span>Transaction</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i ><FaBezierCurve /></i>
                        <span>Analyse</span>
                    </a>
                </li>
                
                <li>
                    <a href="#">
                        <i ><FaUserPlus/></i>
                        <span>Equipe</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i ><FaWrench/></i>
                       <span>Réglages</span>
                         
                   </a>
                </li>
            </ul>

            <ul className="list-unstyled CTAs">
                <li><MonBouton backgroundcolor="#2362bf" texte="Nouveau client" /></li>
            </ul>
        </NavStc>
    )
}

export default AsideBar;