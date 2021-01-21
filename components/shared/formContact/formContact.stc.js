import styled from "styled-components";
import { Container } from "reactstrap";

 const FormContactStc = styled(Container)`

    margin:30px 0px;  
    button
    {
        display:block;
        margin:20px auto;
    }
    label
    {
        position:relative;
    }
    textarea
    {
        min-height:150px;
    }  
    h1
    {
        border-bottom: 1px solid #ecedee;
    }
    a
    {
        font-size:12px;
    }
    p
    {
        margin-top:40px;
    }
    #left
    {
        text-align:left;
    }
    #right
    {
        text-align:right;
    }

    .card 
    {
        border:0px;
    }
`;

export default FormContactStc;