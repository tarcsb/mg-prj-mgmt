import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../store/rootReducer';
import AlertSnackbar from '../components/AlertSnackbar';

const store = createStore(rootReducer);

test('renders AlertSnackbar component', () => {
    const { getByText } = render(
        <Provider store={store}>
            <AlertSnackbar />
        </Provider>
    );

    // Dispatch actions to display notifications
    store.dispatch({ type: 'notification/setSuccess', payload: 'Success message' });
    expect(getByText(/Success message/i)).toBeInTheDocument();

    store.dispatch({ type: 'notification/setError', payload: 'Error message' });
    expect(getByText(/Error message/i)).toBeInTheDocument();
});
