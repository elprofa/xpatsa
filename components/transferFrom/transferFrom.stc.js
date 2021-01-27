import styled from "styled-components";

const TransferWrap = styled.div`
  .list-group-item {
    border: none;
    border-radius: none;
  }

  .form-row
  {
    @media(min-width: 900px) and (max-width: 991px){
        padding:0px 20px;
    }
  }

  ul.steps-indicator {
    display: flex;
    flex-direction: row;
    font-size: 0.5rem;
    border-bottom: 0;
    padding: 1.5rem;
    border-radius: none;
    @media(min-width: 477px) and (max-width: 990px){
        padding:0px;
    }
    @media (min-width: 900px) {
      float: left;
      width: 40%;
      display: block;
      flex-direction: column;
      font-size: 1rem;
    }

    & li a {
      justify-content: flex-start;
      align-items: center;
      display: flex;
      cursor: pointer;
      position: relative;
      color: #868686;

      &:hover {
        text-decoration: none;
      }

      & .step-indicator {
        width: 18px;
        height: 18px;
        background: transparent;
        color: #868686;
        display: flex;
        border: 0.5px solid #a2a2a2;
        align-items: center;
        font-weight: 500;
        justify-content: center;
        flex-shrink: 0;
        border-radius: 100%;
        transition: all 0.2s ease-in-out;
        position: relative;


        @media (max-width: 476px) {
          width: 30px;
          height: 30px;
          font-size:16px;
        }
        @media(min-width: 477px) and (max-width: 767px){
          width: 30px;
          height: 30px;
          font-size:16px;
          margin-top:10px;
        }
        @media(min-width: 768px) and (max-width: 900px){
          width: 30px;
          height: 30px;
          font-size:16px;
        }
        @media (min-width: 900px) {
          width: 38px;
          height: 38px;
        }
      }
    }
  }

//---------------CSS de wedo elprofa-------------------------
  .list-group-item
  {
    padding:0px;
    margin-bottom:30px;

    @media (max-width: 476px) {
     margin:auto;
    }
  }

  .table .label
  {

  }

  .list-group-item td
  {
    @media (max-width: 250px) {
      display:block;
    }

    & .label
    {

      @media (max-width: 250px) {
        margin:0px;
      }
    }
  }

  tr
  {
    float:left;
  }
  .list-group-item .label
  {
    font-weight: 500;
    color: #868686;
    font-size:16px;
    @media (max-width: 476px) {
      display:none;
    }
  }

  .tdRight
  {
    @media (max-width: 767px) {
      display:none;
    }
  }

  .tdLeft,.tdRight
  {
    padding-top:20px;
    @media (max-width: 476px) {
      padding-top:10px;
    }

    @media (max-width: 760px){
      padding-top:5px;
    }
  }

  .titreWizard
    {
        font-size: 28px;
        color: #007bff;
        font-weight: 600;
        margin-top:40px;
        margin-bottom:40px;
    }

  ul.steps-indicator.list-group {
    @media (max-width: 476px) {
      padding:0px;
    }
  }

  .card-body {
    @media (max-width: 476px) {
      padding:0px;
    }
  }

  .my-5.card {
    border: 0px;
  }


  table
  {
    margin:0px;
  }
  td
  {
    border:0px;
    @media (max-width: 476px) {
      padding:5px;
    }
  }
  .tdCenter 
  {
    padding:0px;
    @media (max-width: 900px) {
      display:none;
    }
    @media (max-width: 250px) {
      display:none !important;
    }
  }

  //---------------------------------------------------------------

  .current {
    border: 1px solid ${(props) => props.theme.colors.secondary} !important;
    color: ${(props) => props.theme.colors.secondary}!important;

    & .step-indicator {
      border: 1px solid ${(props) => props.theme.colors.secondary} !important;
      color: ${(props) => props.theme.colors.secondary}!important;
     

      @media (min-width: 900px) {
      }
    }

    & .label {
      color: ${(props) => props.theme.colors.secondary}!important;
      font-weight:600;
    }
  }

  .wizard-steps {
    border-left: 1px solid rgba(122, 123, 151, 0.3);
    background: #fff;

    @media (min-width: 900px) {
      float: right;
      width: 70%;
    }
  }

  .actions {
    display: flex;
    margin-top:20px;

    .btn {
      font-size: 16px;
      border-radius: 0px;
      min-width: 90px;
      min-height:45px;
    }
    @media (min-width: 900px) {
      clear: both;
      margin-left: auto;
      width: 70%;
    }
  }

  .dnone {
    display: none;
  }
`;

export default TransferWrap;
