import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../store/rootReducer';
import JobScheduler from '../components/JobScheduler';

const store = createStore(rootReducer);

test('renders JobScheduler component and schedules a job', () => {
    const { getByLabelText, getByText } = render(
        <Provider store={store}>
            <JobScheduler />
        </Provider>
    );

    fireEvent.change(getByLabelText(/Title/i), { target: { value: 'Test Job' } });
    fireEvent.change(getByLabelText(/Description/i), { target: { value: 'Job description' } });
    fireEvent.change(getByLabelText(/Next Run/i), { target: { value: '2024-07-01T12:00' } });
    fireEvent.click(getByText(/Schedule Job/i));

    // Check that the job has been added to the store
    const state = store.getState();
    expect(state.jobs.jobs).toHaveLength(1);
    expect(state.jobs.jobs[0].title).toBe('Test Job');
});
