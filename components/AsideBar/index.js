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
import dynamic from 'next/dynamic'
import ReactTooltip from 'react-tooltip';
import { useRouter } from "next/router";
import { BsCardChecklist } from "react-icons/bs";

// import Chart from "react-apexcharts";

const Chart = dynamic(
    () => import('react-apexcharts'),
    { ssr: false }
  )

 const AsideBar=(props)=>{
    const router = useRouter();

    const { pathname } = router;
    
    var  options= {
        chart: {
            id: "basic-bar",
            toolbar: { show: false },
            zoom: { enabled: false },
            
        },
        dataLabels: {
        enabled: false
        },
        grid: {
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        xaxis: {
            labels: {
            show: false
            },
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        },
        yaxis:
        {
            show: false
        }
    }

    var series= [
        
        {

        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]

    return (
        <NavStc id="sidebar" className="hidden">
            <div className="sidebar-header">
                <Link href="/">
                    <a>
                        <Image src="/img/Logo_Xpatsa.png" width={100} height={100} />
                    </a>
                </Link>
                
            </div>
            <div className="char" id="chart">
                <Chart 
                    type="area"
                    series={series}
                    options={options}
                    width="100%"
                    />
            </div>
            
            <ul className="list-unstyled components">
                <li className={pathname=="/dashboard"?"active":""}>
                    <Link href="/dashboard">
                        <a data-tip="Dashboard">
                            <i ><FaDelicious /></i>
                            <span>Dashboard</span>
                            <ReactTooltip />
                        </a>
                    </Link>
                </li>
                <li className={pathname=="/clients"?"active":""}>
                    <Link href="/clients">
                        <a data-tip="Client">
                            <i><FaUserFriends/></i>
                            <span>Client</span>
                        </a>
                    </Link>
                </li>
                <li className={pathname=="/transactions"?"active":""}>
                    <Link href="/transactions">
                        <a data-tip="Transaction">
                            <i><FaRegCreditCard /></i>
                            <span>Transaction</span>
                        </a>
                    </Link>
                </li>
                <li className={pathname=="/soldes"?"active":""}>
                    <Link href="/soldes">
                        <a data-tip="Soldes">
                            <i><BsCardChecklist /></i>
                            <span>Soldes</span>
                        </a>
                    </Link>
                </li>
                <li className={pathname=="/analyse"?"active":""}>
                    <a href="#" data-tip="Analyse">
                        <i ><FaBezierCurve /></i>
                        <span>Analyse</span>
                    </a>
                </li>
                
                <li className={pathname=="/equipe"?"active":""}>
                    <a href="#" data-tip="Equipe">
                        <i ><FaUserPlus/></i>
                        <span>Equipe</span>
                    </a>
                </li>
                <li className={pathname=="/reglage"?"active":""}>
                    <a href="#" data-tip="Réglages">
                    <i ><FaWrench/></i>
                       <span>Réglages</span>
                         
                   </a>
                </li>
            </ul>

            <ul className="list-unstyled CTAs">
                <Link href="/save-client">
                    <a>
                    <MonBouton taille="15px" backgroundcolor="#2362bf" texte="Nouveau client" />
                    </a>
                </Link>
            </ul>
            
        </NavStc>
    )

}

export default AsideBar;