import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import cartSlice from './store/shoppingCart/cartSlice'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>
);
