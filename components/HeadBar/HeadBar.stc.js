import styled from 'styled-components';

const HeadBarStc=styled.nav`

    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    border:0px !important;
    @media (max-width:991px)
    {
        .divSearch {
            display: none; 
        }
    }
    @media (min-width: 992px) and (max-width:1154px)
    {
        .divPeviewProfil 
        {
            padding:0px;
        }
    }

    @media (max-width: 767px)
    {
        .divSearch {
            margin: 20px auto;
        }
        .divIconNotification {
            margin: 20px auto;
        }
        .divPeviewProfil {
            
            margin: 20px auto;
        }

        .profilNameRole {
            width: 100%  !important;
            display: block !important;
            text-align: center  !important;
            padding-right: 10px;
            line-height: 1.5;
            margin:20px auto  !important;
        }
        .profilPicture {
            width: 20%  !important;
            display: block  !important;
            margin: 20px auto  !important;
        }
    }

    span.MenuHamburgerAdmin {
        position: absolute;
        top: 0px;
        font-size: 30px;
        left: 0;
        color:#6c757d;
        color:#212529;
        cursor:pointer;
    }

.navbar-header
{
    width:100%;
}
.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
}

i, span {
    display: inline-block;
}

input 
{
    border-radius: 0px;
    height: 100%;
    border: 0px;
    padding-left: 30px;
    margin-left:40px;
    
}

.divIconNotification {
    text-align: center;
}

.divIconNotification a {
    margin:10px;
    font-size:25px;
    cursor:pointer
}
.divIconNotification a span
{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    box-shadow: 0px 6px 6px #ccc;
}

button 
{
    border-radius: 35px;
    width:100%;
    font-size:14px;
}
span.iconSearch {
    position: absolute;
    top: 12px;
    color: #6c757d;
    left:60px
}


i.badge {
    position: absolute;
    margin-left: -5px;
    font-size: 14px;
    background: #2362bf;
    color: #fff;
    border-radius: 50%;
    font-style: initial;
    font-weight: 400;
}
.divIconToggleAside span
{
    width: 100%;
    height: 100%;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    padding: 10px;
    text-align: center;
    &:hover 
    {
        background:#2362bf;
        color:#fff;
    }

    
}

.profilNameRole {
    width: 70%;
    display: inline-block;
    text-align: right;
    padding-right: 10px;
    line-height: 1.5;

    }
    .profilPicture {
        width: 30%;
        max-width:50px;
        display: inline-block;

        div
        {
            border-radius:100%;
        }
    }
    .profilNameRole h3 {
        font-size: 15px;
        font-weight: 600;
        margin-bottom:0px;
    }

    .profilNameRole span {
        font-size: 13px;
        color: #ccc;
    }
`;
export default HeadBarStc;