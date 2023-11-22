import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import { MainPage } from './pages/MainPage';
import { setupStore } from './__data__/store';

import './styles/index.scss';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <MainPage />
    </Provider>
);
