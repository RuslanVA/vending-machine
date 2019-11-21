import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/app';
import ErrorBoundary from './components/error-boundary/error-boundary';
import ProductsService from './services/services';
import { ServiceProvider } from './components/service-context/service-context';

import store from './store/store';

const productsService = new ProductsService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ServiceProvider value={productsService}>
                <Router>
                    <App />
                </Router>
            </ServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);