import styled from 'styled-components';

const AsideBarStc=styled.nav`
        
    width:50vw;
    background: #fff;
    color: #fff;
    transition: all 0.3s;
    box-shadow: 7px 7px 4px #ccc;
    border-radius: 80px 130px 0px 0px;
    /* border: 2px solid #000; */
    z-index: 9999;
    padding:15px;
    
    @media (min-width: 768px)
    {
        min-width:250px;
        .divSearch.col-md-6 {
            margin: 20px auto;
        }
    }
    @media (max-width: 767px)
    {
       height:100vh;
       overflow-y:scroll
    }

   
    @media (max-width: 476px)
    {
        position:fixed;
        width:50%;
        border-radius: 10px 130px 0px 0px;
        overflow-y:scroll;
    }

    @media (min-width: 477px) and (max-width: 767px)
    {
        position:fixed;
        width:30%;
        border-radius: 10px 130px 0px 0px;
        overflow-y:scroll;
    }

    &>div
    {
        margin:0px 50px;
    }

    ul.list-unstyled.components li 
    {
        margin-bottom:10px;
    }

    ul.list-unstyled.components li a
    {
        text-decoration:none;
        padding: 10px 50px;

        @media (max-width: 476px)
        {
            padding:10px;
            font-size:14px;
        }
        @media (min-width: 477px) and (max-width:767px)
        {
            padding:10px;
        }

        
    }
    
    .iconActive
    {
        color:#ccc !important;
        @media (max-width: 476px)
        {
            left: 0px !important;
            position: fixed !important;
        }

        @media (min-width: 476px) and (max-width:767px)
        {
            left: 0px !important;
            position: fixed !important;
        }
    }
    #iconCloseAsideBar
    {
        float: right;
        margin-top: 15%;
        z-index:99999;
        color: #2362bf;
        cursor:pointer;
        @media (min-width: 769px)
        {
            position: relative;
            margin-top: -15%;
        }

        @media (max-width: 476px)
        {
            float:auto;
            position: fixed;
            top: 7%;
            z-index: 99999;
            color: #2362bf;
            cursor: pointer;
            /* margin: auto; */
            left: 47%;
            font-size: 30px;
        }
        @media (min-width: 476px)and (max-width:767px)
        {
            float:auto;
            position: fixed;
            top: 0%;
            z-index: 99999;
            color: #2362bf;
            cursor: pointer;
            /* margin: auto; */
            left: 28%;
            font-size: 30px;
        }
    }

    &.active {
        min-width: 80px;
        max-width: 80px;
        text-align: center;
    }

    &.active .sidebar-header h3, &.active .CTAs {
        display: none;
    }

    &.active .sidebar-header strong {
        display: block;
    }

    & ul li a {
        text-align: left;
    }

    &.active ul li a {
        padding: 20px 10px;
        text-align: center;
        font-size: 0.85em;
    }

    &.active ul li a i {
        margin-right:  0;
        display: block;
        font-size: 1.8em;
        margin-bottom: 5px;
    }

    &.active ul ul a {
        padding: 10px !important;
    }

    &.active a[aria-expanded="false"]::before, &.active a[aria-expanded="true"]::before {
        top: auto;
        bottom: 5px;
        right: 50%;
        -webkit-transform: translateX(50%);
        -ms-transform: translateX(50%);
        transform: translateX(50%);
    }

    & .sidebar-header {
        background: #fff;
        width:80%;
        margin:auto;

        @media (max-width: 476px)
        {
            margin-top:40px;
        }
    }

    & .sidebar-header strong {
        display: none;
        font-size: 1.8em;
    }

    & ul.components {
        padding: 20px 0;
    }

    & ul li a {
        padding: 10px;
        font-size: 1.1em;
        display: block;
    }
    & ul li a:hover {
        color: #fff;
        background: #2362bf;
    }
    & ul li a i {
        margin-right: 10px;
    }

    & ul li.active > a, a[aria-expanded="true"] {
        color: #fff;
        background: #2362bf;
    }


    .list-unstyled button 
    {
        width:100%;
        font-size:14px;
        border-radius:30px;
    }


    a[data-toggle="collapse"] {
        position: relative;
    }

    a[aria-expanded="false"]::before, a[aria-expanded="true"]::before {
        content: '\e259';
        display: block;
        position: absolute;
        right: 20px;
        font-family: 'Glyphicons Halflings';
        font-size: 0.6em;
    }
    a[aria-expanded="true"]::before {
        content: '\e260';
    }


    ul ul a {
        font-size: 0.9em !important;
        padding-left: 30px !important;
        background: #6d7fcc;
    }

    ul.CTAs {
        padding: 20px;
    }

    ul.CTAs a {
        text-align: center;
        font-size: 0.9em !important;
        display: block;
        border-radius: 5px;
        margin-bottom: 5px;
    }

    a.download {
        background: #fff;
        color: #7386D5;
    }

    a.article, a.article:hover {
        background: #6d7fcc !important;
        color: #fff !important;
    }

    @media (max-width: 768px) {
    
    a[aria-expanded="false"]::before, a[aria-expanded="true"]::before {
        top: auto;
        bottom: 5px;
        right: 50%;
        -webkit-transform: translateX(50%);
        -ms-transform: translateX(50%);
        transform: translateX(50%);
    }
    &.active {
        margin-left: 0 !important;
    }

    & .sidebar-header h3, & .CTAs {
        display: none;
    }

    & .sidebar-header strong {
        display: block;
    }

    & ul li a {
        padding: 20px 10px;
    }

    & ul li a span {
        font-size: 0.85em;
    }
    & ul li a i {
        margin-right:  0;
        display: block;
    }

    & ul ul a {
        padding: 10px !important;
    }

    & ul li a i {
        font-size: 1.3em;
    }
    & {
        margin-left: 0;
    }
    #sidebarCollapse span {
        display: none;
    }
}


`;
export default AsideBarStc;