import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDestinataire from '../formDestinataire/formDestinataire';
import FormTransaction from '../formTransaction/formTransaction';
import BlockConfirmation from '../blockConfirmation/blockConfirmation';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Simuler votre transaction', 'Entrer le destinataire', 'Confirmer et envoyer'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FormTransaction/>;
    case 1:
      return <FormDestinataire/>;
    case 2:
      return <BlockConfirmation/>;
    default:
      return 'Aucun composant trouvé';
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    //return step === 0;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    
        <div className={classes.root}>
            <div className="row">
            <div className="col-lg-6 colGaucheWizard">
                <h1 className="titreWizard">Transférez de l'argent</h1>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        //labelProps.optional = <Typography variant="caption">Optional</Typography>;
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>
                                {index===0? <Image 
                                    src="/img/stepIcon1.svg"
                                    alt="Picture of computer"
                                    width="60"
                                    height="60"
                                />:''}
                                {index===1? <Image 
                                    src="/img/stepIcon2.svg"
                                    alt="Picture of computer"
                                    width="60"
                                    height="60"
                                />:''}
                                {index===2? <Image 
                                    src="/img/stepIcon3.svg"
                                    alt="Picture of computer"
                                    width="60"
                                    height="60"
                                />:''}
                                <span className="spanLabel">
                                    {label}
                                </span>
                            </StepLabel>
                        </Step>
                    );
                    })}
                </Stepper>
            </div>

            <div className="col-lg-6">
                {activeStep === steps.length ? (
                <div>
                    <div className={classes.instructions}>
                        <div className="derniereTape">
                        <Image 
                            src="/img/stepIcon1.svg"
                            alt="Picture of computer"
                            width="150"
                            height="150"
                        />
                        <p>Félicitations, vous avez envoyé <span>345 CFA</span> à <span>+241 077484326</span></p>
                        </div>
                    </div>
                    <Button onClick={handleReset} className={classes.button}>
                    Reset
                    </Button>
                </div>
                ) : (

                <div>
                    <div className={classes.instructions}>{getStepContent(activeStep)}</div>
                    <div>
                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                        PRECEDENT
                    </Button>
                    {isStepOptional(activeStep) && (
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSkip}
                        className={classes.button}
                        >
                        Skip
                        </Button>
                    )}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                    >
                        {activeStep === steps.length - 1 ? 'ENVOYER' : 'SUIVANT'}
                    </Button>
                    </div>
                </div>
                )}

            </div>
        </div>
    </div>
  );
}
