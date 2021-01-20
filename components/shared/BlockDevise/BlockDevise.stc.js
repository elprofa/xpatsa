import styled from "styled-components";

import {Card } from "reactstrap";

 const BlockDeviseStc = styled(Card)`
    border: 0px;
    margin: 30px 0px;
    h1
    {
        color: #405984;
        font-size: 26px;
        font-weight: 600;
    }
    p
    {
        color: #405984;
    
    }
    svg
    {
        position:relative;
        bottom:7px;
        margin-right:10px;
        font-size:40px;
    }
`;
export default BlockDeviseStc;