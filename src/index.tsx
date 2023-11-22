import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';
import { setupStore } from './__data__/store';

import { MainPage } from './pages/MainPage';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <MainPage />
    </Provider>
);
