import styled from 'styled-components';
import Row from 'react-bootstrap/Row';

export const Ranger = styled(Row)`
  width: 200px;
  height: 30px;
  background:magenta !important;
  color:black !important;

  &:hover {
    color: #0080ff;
    cursor: pointer;
  }

  &.font-icone {
    background-color:transparent !important;
    color:white !important;
    font-weight:18px;
  }
`;

