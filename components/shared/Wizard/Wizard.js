import React from 'react';

import StepWizard from "./StepWizard";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { store, stepSlice } from "./slices/stepSlice";


const Wizard = (props) => {
    return(
        <>
            <StepWizard isLazyMount store={store} stepSlice={stepSlice}>
                <Step1 />
                <Step2 />
                <Step3 />
            </StepWizard>
            <p><button onClick={()=>StepWizard.props.goToStep(2)}>Step 2</button></p>

    </>
    );
  };

export default Wizard;