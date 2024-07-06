import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

test('renders Header component', () => {
    const { getByText } = render(<Header />);
    const headerElement = getByText(/My Awesome Project/i);
    expect(headerElement).toBeInTheDocument();
});
