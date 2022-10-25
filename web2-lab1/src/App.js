import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Fragment, useEffect, useState, useHistory } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home"
import PregledUtakmica from './pages/PregledUtakmica';
import Tablica from './pages/Tablica';
import Utakmica from './pages/Utakmica';

function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/utakmice" element={<PregledUtakmica />} />
        <Route exact path="/tablica" element={<Tablica />} />
        <Route exact path="/utamica/:idutakmice" element={<Utakmica />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
