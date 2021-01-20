import styled from "styled-components";

export const RangerFooter = styled.div`
  /* width: 100%; */
  color: white;
  background: #37517e !important;
  font-size: 10px;
  padding:30px 0px;
  .firstLine
  {
    border-bottom:1px solid #ccc;
    margin:0px;
    padding-bottom:0px;

    @media (min-width: 576px) {
      padding-bottom:20px;
    }
    
  }

  .lastLine
  {
    margin-top:20px;
    margin-left:0px;
    margin-right:0px;
  }

  .lastLine .smLeft1
  {
    padding:0px;
    text-align:center;
    font-size: 13px;
    font-weight: 100;
    color: #ccc;
    
    @media (min-width: 576px) {
        padding-left:0px;
        font-size: 15px;
    }
    @media (min-width: 577px){
      text-align:left;
    }
  }

  .lastLine .smRight1
  {
    padding:0px;
    text-align:center;
    font-size: 13px;
    font-weight: 100;
    color: #ccc;

    @media (min-width: 576px) {
        padding-right:0px;
        text-align:right;
        font-size: 15px;
    }
  }

  .menuFooter
  {
    @media (max-width: 990px) {
        display:none !important;
    }
  }

  .smLeft
  {
    padding:0px;
    @media (min-width: 576px) {
        padding-left:0px;
    }
  }

  .smRight
  {
    padding:0px;
    @media (min-width: 576px) {
      padding-right:0px;
    }
  }
  

  @media (min-width: 900px) {
    font-size: 16px;
  }
  .socialMediaUl
  {
    
    text-align: center;
    font-size: 12px;
    @media (min-width: 576px)
    {
      float:right;
    }

    @media (min-width: 990px)
    {
      margin-right:0px !important;
    }
  }

  li.socialMediaUl.list-group-item span {
      font-size: 18px;
  }
  .list-group-item {
    background-color: transparent;
    border: none;
    color: white !important;
    @media (min-width: 991px)
    {
      padding: 5px;
      margin: auto;
    }
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
