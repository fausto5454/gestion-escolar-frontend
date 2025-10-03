<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
>>>>>>> 0ffb3716a33ab13948139a1981f5ab894079ea17
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
<<<<<<< HEAD

=======
>>>>>>> 0ffb3716a33ab13948139a1981f5ab894079ea17
