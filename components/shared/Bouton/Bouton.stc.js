import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap';
const BoutonStc = styled(Button)`
    background: ${props => props.backgroundColor || "#ccc"};
    border: 0px;
    border-radius: 0px;
    color:${props => props.color || "#fff"};
    min-width: 80px;
    min-height: 33px;
    position:relative;
    overflow:hidden;
    font-size: 12px;

    &:before
    {
        content:" ";
        display:block;
        width:200px;
        height:80px;
        background:rgba(255, 255, 255, .2); 
        position:absolute;
        top:-10px;
        left:-200px;
        transform:rotate(-50deg);
        transition:all .9s ease-in-out;
    }
    &:hover:before{
		margin-left:150%;
	}
    &:hover
    {
        color:${props => props.color || "#fff"};
    }
    .badge
    {
        background: transparent;
        font-weight: 800;
        font-size: inherit;
        color:${props => props.color || "#fff"};
    }
`;

export default BoutonStc
