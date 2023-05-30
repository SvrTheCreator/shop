import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'

import { reducer } from "./store/reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>);
