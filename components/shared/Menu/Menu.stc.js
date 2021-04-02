import {NavItem} from 'reactstrap';
import styled from 'styled-components'

export const MenuStc=styled(NavItem)`

    &.activeLogin a
    {
        text-decoration:underline;
        font-weight:600;

    }
`;