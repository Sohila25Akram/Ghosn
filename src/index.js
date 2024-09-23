import React from 'react';
import ReactDOM from 'react-dom/client';
import 'remixicon/fonts/remixicon.css';
import './index.css';
import { ToastContainer } from 'react-toastify';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import store from './app/store'
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'react-toastify/dist/ReactToastify.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <ToastContainer
            theme='dark'
            position='top-right'
            autoClose={3000}
            closeOnClick
            pauseOnHover={false}
            style={{zIndex: "9999999999999999"}}
          />
          <App />
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
