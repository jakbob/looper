import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import store from './app/store';

const rootEl = document.getElementById('root');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootEl,
);
