import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../store/rootReducer';
import Dashboard from '../components/Dashboard';

const store = createStore(rootReducer);

test('renders Dashboard component with statistics', () => {
    // Add mock jobs to the store
    store.dispatch({
        type: 'jobs/fetchJobs/fulfilled',
        payload: [
            { id: 1, title: 'Job 1', interval: 'daily' },
            { id: 2, title: 'Job 2', interval: 'weekly' },
            { id: 3, title: 'Job 3', interval: 'monthly' },
        ],
    });

    const { getByText } = render(
        <Provider store={store}>
            <Dashboard />
        </Provider>
    );

    expect(getByText(/Total Jobs/i)).toBeInTheDocument();
    expect(getByText(/3/i)).toBeInTheDocument();
    expect(getByText(/Daily Jobs/i)).toBeInTheDocument();
    expect(getByText(/1/i)).toBeInTheDocument();
    expect(getByText(/Weekly Jobs/i)).toBeInTheDocument();
    expect(getByText(/1/i)).toBeInTheDocument();
    expect(getByText(/Monthly Jobs/i)).toBeInTheDocument();
    expect(getByText(/1/i)).toBeInTheDocument();
});
