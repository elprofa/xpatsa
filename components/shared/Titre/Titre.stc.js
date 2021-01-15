import styled from "styled-components";

export const TitreStc = styled.h1`
    font-size: 30px;
    font-weight: 700;
    padding-bottom: 15px;
    position: relative; 
    color: ${props => props.color || "#000"};
    
    &:before
    {
        content: "";
        position: absolute;
        width: 80px;
        height: 1px;
        bottom: 0;
        left: 0;
        border-bottom: ${props => props.underline || "0"}px solid ${props => props.color || "#000"};;
    }
`;
