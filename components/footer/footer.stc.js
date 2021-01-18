import styled from "styled-components";

export const RangerFooter = styled.div`
  /* width: 100%; */
  color: white;
  background: #37517e !important;

  .list-group-item {
    background-color: transparent;
    border: none;
    color: white !important;
  }

  select {
    background: transparent;
    border: 1px solid #fff !important;
    border-radius: 0px;
    color: #fff;
  }

  select:focus {
    background-color: transparent;
    color: #fff;
  }

  .col-icon {
  }

  .col-copyright {
    padding-right: 0;
    color: rgba(253, 251, 251, 0.59);
  }

  .lastRow {
    border-top: 1px solid grey;
  }

  .contact-tel {
    color: rgba(253, 251, 251, 0.59);
  }
`;
