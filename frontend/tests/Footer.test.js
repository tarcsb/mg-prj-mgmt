import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders Footer component', () => {
    const { getByText } = render(<Footer />);
    const footerElement = getByText(/© 2024 My Awesome Project/i);
    expect(footerElement).toBeInTheDocument();
});
