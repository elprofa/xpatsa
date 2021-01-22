import React from 'react';
import Loki from 'react-loki';
import {BsFillBackspaceFill} from 'react-icons/bs';
import {FaAdversal} from 'react-icons/fa';
import {FaAngellist} from 'react-icons/fa';

import { Container, Row, Col, Card } from "reactstrap";

const customSteps = [
    {
        label: 'Step 1',
        icon: <BsFillBackspaceFill />,
        component: <h1>step 1</h1>,
    },
    {
        label: 'Step 2',
        icon: <FaAdversal />,
        component: <h1>step 2</h1>,
    },
    {
        label: 'Step 3',
        icon: <FaAngellist />,
        component: <h1>step 3</h1>,
    },
];

const CustomDemo = () => {
    const _customRenderer = ({ currentStep }) => {
        const steps = customSteps.map((step, index) => {
            const isActive = currentStep === index + 1;
            return <li key={index} className="custom-step">{`${step.label} ${isActive && 'active'}`}</li>
        });

        return <ul className="custom-step-renderer">{steps}</ul>;
    };

    const _customActions = ({ isComplete, cantBack, isInFinalStep, backHandler, nextHandler }) => {
        return (
            <Row>
                <Col lg={6}>
                    <_customRenderer />
                </Col>
                <Col lg="6">
                    <div className="button-group">
                        <button type="button" className="btn btn-secondary btn-sm" onClick={backHandler} disabled={cantBack || isComplete}>
                            {`Go back`}
                        </button>
                        <button type="button" className="btn btn-outline-primary btn-sm" onClick={nextHandler} disabled={isComplete}>
                            {isInFinalStep ? `Finish HIM` : `Go Next`}
                        </button>
                    </div>
                </Col>
            </Row>
            
        );
    };

    const _onFinish = () => {
        alert('Custom Demo Finished');
    };

    return (
        <div className="Demo">
            <Loki
                steps={customSteps}
                renderSteps={_customRenderer}
                onFinish={_onFinish} />
        </div>
    );
};

export default CustomDemo;