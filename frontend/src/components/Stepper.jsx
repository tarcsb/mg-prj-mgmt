import React from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import { useState } from 'react';

const steps = ['Step 1', 'Step 2', 'Step 3'];

const CustomStepper = ({ onComplete }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      onComplete();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </div>
    </>
  );
};

export default CustomStepper;
