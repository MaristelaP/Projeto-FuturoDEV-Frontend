import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Produto from './components/Produto/produto';
import { ProdutoProvider } from './components/contexts/ProdutoContext';

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //{ path: '/', element: <Login /> },
      //{ path: '/estoque', element: <Estoque /> },
      { path: '/produto', element: <Produto /> },
    ],
  },
]); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals reportWebVitals();
