import React from "react";
import Loki from "react-loki";
import clsx from "clsx";
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

import Step3 from "../../stepThree";
import Step2 from "../../stepTwo";
import Step1 from "../FormStepOne";
import TransferFromWrap from "../../transferFrom/transferFrom.stc";

const customSteps = [
  {
    label: "Personal information",
    number: "1",
    component: <Step1 />,
  },
  {
    label: "Billing information",
    number: "2",
    component: <Step2 />,
  },
  {
    label: "Payment details",
    number: "3",
    component: <Step3 />,
  },
];

const transfert = (props) => {
  const _customRenderer = ({ currentStep }) => {
    const steps = customSteps.map((step, index) => {
      const isActive = currentStep === index + 1;
      return (
        <ListGroupItem
          key={index}
          className={clsx("card-box", { current: isActive })}
        >
          <a href="#/" onClick={(e) => e.preventDefault()}>
            <div className="step-indicator">{step.number}</div>
            <div className="label ml-2">{step.label}</div>
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
          Previous
        </Button>
        <Button color="primary" onClick={nextHandler} disabled={isComplete}>
          {isInFinalStep ? "Finish" : "Next"}
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
          <CardHeader>header</CardHeader>
          <CardBody>
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
