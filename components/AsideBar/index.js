import React, { Component } from "react";
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
import { FaSquareFull } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import Chart from "react-apexcharts";

// const AsideBar=(props)=>{
class AsideBar extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
        };
      }
      
      render() {

    return (
        <NavStc id="sidebar" className="hidden">
            <div className="sidebar-header">
                <Link href="/">
                    <Image src="/img/Logo_Xpatsa.png" width={80} height={80} />
                </Link>
                
            </div>
            <div className="char" id="chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
            </div>
            <span id="iconCloseAsideBar" className="iconActive" onClick={props.hideNavBar}><BiTransfer /></span>
            <ul className="list-unstyled components">
                <li className="active">
                    <Link href="/dashboard">
                        <a >
                            <i ><FaDelicious /></i>
                            <span>Dashboard</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/client">
                        <a >
                            <i><FaUserFriends/></i>
                            <span>Clients</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/transaction">
                        <a>
                            <i><FaRegCreditCard /></i>
                            <span>Transaction</span>
                        </a>
                    </Link>
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
}

export default AsideBar;