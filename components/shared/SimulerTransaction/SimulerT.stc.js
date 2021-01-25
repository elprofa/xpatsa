import styled from "styled-components";
import { Container } from "reactstrap";

 const SimulerFormStc = styled(Container)`

 
background: #fff;
width:100%;
height:450px;

p
{
    color:#007bff;
}

.radio
{
    color:#007bff;
}

.lbCheck
{
    color:#007bff;
}
 
.form{
    width:80%;
    height:100%;
    position:relative;
    z-index:2;
    color:black;
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

export default SimulerFormStc;