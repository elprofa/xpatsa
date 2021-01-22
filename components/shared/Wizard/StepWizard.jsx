import React, { PureComponent } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";

import { store, stepSlice } from "./slices/stepSlice";

import {StepWizardStc} from "./StepWizard.stc";

import { Badge} from 'reactstrap';

import Image from 'next/image';

export default class StepWizard extends PureComponent {

//---------------------------------------------------------
  constructor(props) {
    super(props);

    this.state = this.initialState();
  }
  //----------------------------------------------------

  //----------------------------------------------------------------------
  componentDidMount() {
    // Hash change listener - for back/forward button
    if (this.props.isHashEnabled) {
      window.addEventListener("hashchange", this.onHashChange);
    }

    // Provide instance to parent
    //this.props.instance(this);
  }
  //------------------------------------------------------------------

  //--------------------------------------------------------------------

  componentWillUnmount() {
    // Remove listener
    if (this.props.isHashEnabled) {
      window.removeEventListener("hashchange", this.onHashChange);
    }
  }

  //----------------------------------------------------------------------

  //-----------------------------------------------------------------------
  /** Setup Steps */
  initialState = () => {
    const state = {
      activeStep: store.getState(),
      classes: {},
      hashKeys: {}
    };

    // Set initial classes
    // Get hash only in client side
    const hash = typeof window === "object" ? this.getHash() : "";
    const children = React.Children.toArray(this.props.children);
    children.forEach((child, i) => {
      // Create hashKey map
      state.hashKeys[i] =
        (child.props && child.props.hashKey) || `step${i + 1}`;
      state.hashKeys[state.hashKeys[i]] = i;
    });

    // Set activeStep to initialStep if exists
    const initialStep = this.props.initialStep - 1;
    if (initialStep && children[initialStep]) {
      state.activeStep = initialStep;
    }

    // Set activeStep from hash - trumps initialStep
    if (
      this.props.isHashEnabled &&
      hash &&
      state.hashKeys[hash] !== undefined
    ) {
      // References hashKey
      state.activeStep = state.hashKeys[hash];
    }

    // Give initial step an intro class
    if (this.props.transitions) {
      state.classes[state.activeStep] = this.props.transitions.intro || "";
    }

    return state;
  };
  //----------------------------------------------------------------------------------

  // Get hash and remove #
  //------------------------------------------------------------------------
  getHash = () => decodeURI(window.location.hash).replace(/^#/, "");
  //--------------------------------------------------------------------

  //----------------------------------------------------------------------
  onHashChange = () => {
    const next = this.state.hashKeys[this.getHash()];

    if (next !== undefined) this.setActiveStep(next);
  };
  //------------------------------------------------------------------------

  isInvalidStep = next => next < 0 || next >= this.props.children.length;

  //--------------------------------------------------------------------------
  goToNextStep = () => {
    
    const activeStep = store.getState();
    if (this.isInvalidStep(activeStep)) {
      console.error(`${activeStep + 1} is an invalid step`);
      return;
    }
    return store.dispatch(stepSlice.actions.increment());
  };
  //---------------------------------------------------------------------
    
  //---------------------------------------------------------------------
  goToPreviousStep = () => {
    const activeStep = store.getState();
    if (this.isInvalidStep(activeStep)) {
      console.error(`${activeStep + 1} is an invalid step`);
      return;
    }
    return store.dispatch(stepSlice.actions.decrement());
  };
  //--------------------------------------------------------------------

  //-----------------------------------------------------------------------
  setActiveStep = next => {
    const active = this.state.activeStep;
    //const active = store.getState();
    if (active === next) return;
    if (this.isInvalidStep(next)) {
      console.error(`${next + 1} is an invalid step`);
      return;
    }

    // console.log(change, active, next);

    this.setState({
      activeStep: next
      // },
      // () => {
      //   // Step change callback
      //   this.onStepChange({
      //     previousStep: active + 1,
      //     activeStep: next + 1
      //   });
    });
  };
//------------------------------------------------------------------

  onStepChange = stats => {
    // User callback
    //this.props.onStepChange(stats);

    // Update hash if prop set
    if (this.props.isHashEnabled) this.updateHash(this.state.activeStep);
  };

  //---------------------------------------------------------------------------

  /** Go to first step */
  firstStep = () => this.goToStep(1);

  /** Go to last step */
  lastStep = () => this.goToStep(this.props.children.length);

  /** Next Step */
  nextStep = () => this.setActiveStep(this.state.activeStep + 1);
  //nextStep = () => this.goToNextStep();

  /** Previous Step */
  previousStep = () => this.setActiveStep(this.state.activeStep - 1);

  //previousStep = () => this.goToPreviousStep();

  /** Go to step index */
  goToStep = step => this.setActiveStep(step - 1);

  updateHash = activeStep => {
    window.location.hash = this.state.hashKeys[activeStep];
  };

  // Allows for using HTML elements as a step
  isReactComponent = ({ type }) =>
    typeof type === "function" || typeof type === "object";

  /** Render */
  render() {
    console.log("store state", store.getState());
    const props = {
      currentStep: this.state.activeStep + 1,
      totalSteps: this.props.children.length,
      /** Functions */
      nextStep: this.nextStep,
      previousStep: this.previousStep,
      goToStep: this.goToStep,
      firstStep: this.firstStep,
      lastStep: this.lastStep
    };

    const { classes } = this.state;
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child, i) => {
        props.isActive = i === this.state.activeStep;
        props.transitions = classes[i];

        // Not Lazy Mount || isLazyMount && isActive
        if (
          !this.props.isLazyMount ||
          (this.props.isLazyMount && props.isActive)
        ) {
          return (
            <StepWizardStc>
            <div className="row">
              <div className="col-lg-4">
                <table className="table">
                  <tr className="trRow active">
                    <td className="firstColonne">
                    <Badge variant="secondary">1</Badge>
                    </td>
                    <td className="secondColonne">
                      <span>
                        <Image 
                            src="/img/stepIcon.svg"
                            alt="Picture of computer"
                            width="80"
                            height="80"
                        />
                        </span>
                    </td>
                    <td className="thirdColonne">
                      <p>Simuler votre transaction</p>
                    </td>
                  </tr>
                  <tr className="trRow " onClick={()=>props.goToStep(2)}>
                    <td className="firstColonne">
                    <Badge variant="secondary">2</Badge>
                    </td>
                    <td className="secondColonne">
                      <span>
                        <Image 
                            src="/img/stepIcon.svg"
                            alt="Picture of computer"
                            width="80"
                            height="80"
                        />
                        </span>
                    </td>
                    <td className="thirdColonne">
                      <p>Entrer le destinataire</p>
                    </td>
                  </tr>
                  <tr className="trRow">
                    <td className="firstColonne">
                    <Badge variant="secondary">3</Badge>
                    </td>
                    <td className="secondColonne">
                      <span>
                        <Image 
                            src="/img/stepIcon.svg"
                            alt="Picture of computer"
                            width="80"
                            height="80"
                        />
                        </span>
                    </td>
                    <td className="thirdColonne">
                      <p>Confirmer et envoyer</p>
                    </td>
                  </tr>
                  
                </table>
              </div>
              <div className="col-lg-8">
                <Step {...props}>
                  {this.isReactComponent(child)
                    ? React.cloneElement(child, props)
                    : child}
                </Step>
                <h2>StepWizard component buttons</h2>
                <button className="button is-light" onClick={props.previousStep}>
                  Previous Step
                </button>
                <button className="button is-light" onClick={props.nextStep}>
                  Next Step
                </button>
                <p><button onClick={()=>props.goToStep(2)}>Step 2</button></p>
              </div>
            </div>
              
            </StepWizardStc>
          );
        }

        return null;
      }
    );

    return (
      <div className={this.props.className}>
        {this.props.nav && React.cloneElement(this.props.nav, props)}
        <div className="">{childrenWithProps}</div>
      </div>
    );
  }
}

StepWizard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  initialStep: PropTypes.number,
  instance: PropTypes.func,
  isHashEnabled: PropTypes.bool,
  isLazyMount: PropTypes.bool,
  nav: PropTypes.node,
  onStepChange: PropTypes.func,
  transitions: PropTypes.object
};

StepWizard.defaultProps = {
  children: [],
  className: null,
  initialStep: 1,
  instance: () => {},
  isHashEnabled: false,
  isLazyMount: false,
  nav: null,
  onStepChange: () => {},
  transitions: undefined
};

export const Step = ({ children, isActive, transitions }) => (
  <div
    className={` ${transitions} ${
      isActive ? "active" : ""
    }`.trim()}
  >
    {children}
  </div>
);

if (process.env.NODE_ENV !== "production") {
  Step.propTypes = {
    children: PropTypes.node,
    isActive: PropTypes.bool,
    transitions: PropTypes.string
  };
}

Step.defaultProps = {
  children: [],
  isActive: false,
  transitions: ""
};
