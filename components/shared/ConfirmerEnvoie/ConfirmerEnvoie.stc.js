import styled from "styled-components";
import { Container } from "reactstrap";

 const ConfirmerEnvoyerStc = styled(Container)`
 
background: #fff;
width:100%;
height:100%;

p
{
    color:#007bff;
}

.card
{
    width:100%;
    height:65%;
    color: black;
    overflow: hidden;
    background: #fff;
}


.btn
{
  border: 1px solid ${(props) => props.borderColor || "#007bff"};
  border-radius: 0px;
  min-width:${(props) => props.minWidth || "40px"} !important;
  min-height: 40px;
  position: relative;
  overflow: hidden;
  font-size: 12px;
  @media (min-width: 900px) {
    min-width: 80px;
    min-height: 40px;
  }

  &:before {
    content: " ";
    display: block;
    width: 200px;
    height: 80px;
    background: rgba(255, 255, 255, 0.2);
    position: absolute;
    top: -10px;
    left: -200px;
    transform: rotate(-50deg);
    transition: all 0.9s ease-in-out;
  }
  &:hover:before {
    margin-left: 150%;
  }
  &:hover {
    color: ${(props) => props.color || "#007bff"};
  }
  .badge {
    background: transparent;
    font-weight: 800;
    font-size: inherit;
    color: ${(props) => props.color || "#fff"};
  }
}


 
.form{
    width:80%;
    height:100%;
    position:relative;
    z-index:2;
    color:black;
}

.cnt-btn{
    display:inline-flex;
    box-sizing:border-box;
}

.row
    {
        margin:-10px;
    }

h1
    {
        margin-bottom:30px;
        border-bottom: 1px solid #ecedee;
    }

    
    #left
    {
        text-align:left;
    }
    #right
    {
        text-align:right;
    }

    textarea
    {
        width: 100%;
    }
`;

export default ConfirmerEnvoyerStc;