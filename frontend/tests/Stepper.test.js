import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomStepper from '../components/Stepper';

test('renders CustomStepper component and navigates through steps', () => {
    const { getByText } = render(<CustomStepper onComplete={() => {}} />);
    const nextButton = getByText(/Next/i);
    
    fireEvent.click(nextButton);
    expect(getByText(/Review and Confirm/i)).toBeInTheDocument();
    
    fireEvent.click(nextButton);
    expect(getByText(/Completed/i)).toBeInTheDocument();
    
    fireEvent.click(nextButton);
    expect(getByText(/All steps completed/i)).toBeInTheDocument();
});
