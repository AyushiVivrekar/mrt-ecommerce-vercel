import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './Pages/Home/style.css'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import 'ionicons/dist/css/ionicons.min.css';
import store from './store/store';
import './Pages/Home/mediaQuery.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
   <BrowserRouter>
   <App />
   <ToastContainer/>
   </BrowserRouter>
    </Provider>
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
