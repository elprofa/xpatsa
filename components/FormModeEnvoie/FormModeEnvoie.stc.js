import styled from "styled-components";

const FormModeEnvoie = styled.div`
  .list-group-item {
    border: none;
    border-radius: none;
  }

  ul.steps-indicator {
    display: flex;
    flex-direction: row;
    font-size: 0.5rem;
    border-bottom: 0;
    padding: 1.5rem;
    border-radius: none;
    @media (min-width: 900px) {
      float: left;
      width: 30%;
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
        font-weight: 700;
        justify-content: center;
        flex-shrink: 0;
        border-radius: 100%;
        transition: all 0.2s ease-in-out;
        position: relative;
        @media (min-width: 900px) {
          width: 38px;
          height: 38px;
        }
      }
    }
  }

  .current {
    border: 1px solid #1392c0 !important;
    color: ${(props) => props.theme.colors.secondary}!important;

    & .step-indicator {
      border: 1px solid #1392c0 !important;
      color: ${(props) => props.theme.colors.secondary}!important;
      @media (min-width: 900px) {
      }
    }

    & .label {
      color: ${(props) => props.theme.colors.secondary}!important;
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

    .btn {
      font-size: 0.6rem;
      @media (min-width: 900px) {
        font-size: 1rem;
      }
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

export default FormModeEnvoie;
