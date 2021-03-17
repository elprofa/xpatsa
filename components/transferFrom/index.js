import React, {useContext} from "react";
import Loki from "react-loki";
import clsx from "clsx";
import 'bootstrap/dist/css/bootstrap.min.css'


import Image from 'next/image';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { toast, Zoom } from "react-toastify";


import Step4 from "../RecapTransfert";
import Step3 from "../MontantTransfert";
import Step2 from "../ModeEnvoie";
import Step1 from "../PersonalInfo";
import TransferFromWrap from "./transferFrom.stc";

const customSteps = [
  {
    label: "Destination",
    number: "1",
    component: <Step1 />,
  },
  {
    label: "Base de calcul",
    number: "2",
    component: <Step2 />,
  },
  {
    label: "Informations financières",
    number: "3",
    component: <Step3 />,
  },
  {
    label: "Recapitulatif",
    number: "4",
    component: <Step4 />,
  },
];

const transfert = (props) => {
  const _customRenderer = ({ currentStep }) => {
    const steps = customSteps.map((step, index) => {
      const isActive = currentStep === index + 1;
      let lienIcon="";

      switch (index) {
        case 0:
          lienIcon="/img/stepIcon1.svg"
          break;

        case 1:
          lienIcon="/img/stepIcon2.svg"
          break;
        case 2:
          lienIcon="/img/stepIcon3.svg"
          break;
      
        default:
          lienIcon="/img/stepIcon3.svg"
          break;
      }
      return (
        <ListGroupItem
          key={index}
          className={clsx("card-box", { current: isActive })}
        >
          <a href="#/" onClick={(e) => e.preventDefault()}>
            <table className="table">
              <tr>
                <td className="tdLeft"> 
                    <div className="step-indicator">{step.number}</div>
                </td>
                <td className="tdCenter">
                  
                <Image 
                    src={lienIcon}
                    alt="Picture of computer"
                    width="80" 
                    height="80"
                />
                </td>
                <td className="tdRight">
                  <div className="label ml-2">{step.label}</div>
                </td>
              </tr>
            </table>
          </a>
        </ListGroupItem>
      );
    });

    return (
      <div>
        <ListGroup className="steps-indicator">{steps}</ListGroup>
      </div>
    );
  };

  const _customActions = ({
    isComplete,
    cantBack,
    isInFinalStep,
    backHandler,
    nextHandler,
  }) => {
    
    return (
      <div className="actions">
        <Button
          outline
          color="primary"
          onClick={backHandler}
          disabled={cantBack || isComplete}
          className={clsx("mr-4", { dnone: cantBack })}
        >
          PRECEDENT
        </Button>
        <Button color="primary" onClick={nextHandler} disabled={isComplete}>
          {isInFinalStep ? "TERMINER" : "SUIVANT"}
        </Button>
      </div>
    );
  };

  const _onFinish = () => {
    toast.success("Yes, you've successfully reached the last wizard step !", {
      containerId: "B",
      transition: Zoom,
    });
  };
  return (
    <TransferFromWrap>
      <Container>
        <Card className="my-5">
          <CardBody>
            <h1 className="titreWizard">Transferez de l'argent</h1>
            <Loki
              steps={customSteps}
              renderSteps={_customRenderer}
              renderActions={_customActions}
              onFinish={_onFinish}
              className="row"
            />
          </CardBody>
        </Card>
      </Container>
    </TransferFromWrap>
  );
};

export default transfert;
