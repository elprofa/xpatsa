import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

export const RangerFooter = styled(Container)`
  width: 100%;
  height: 120px;
  color:white;
  background: #37517E !important;

  .list-group-item {
    background-color: transparent;
    border: none;
    color: white!important;
}

.col-icon {
  padding-top: 10px;
  padding-right: 25px;
}

.col-copyright {
  padding-right: 0;
  color:rgba(253, 251, 251, 0.59);
}

.lastRow {
  font-weight:normal!important;
  border-top: 1px solid grey;
  width:100%;
  height: 3rem;
}

.contact-tel {
  color:rgba(253, 251, 251, 0.59);
}
  
`;