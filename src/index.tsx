import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { MainPage } from './pages/MainPage';

import { Provider } from 'react-redux';

import { setupStore } from './__data__/store';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <MainPage />
    </Provider>
);
