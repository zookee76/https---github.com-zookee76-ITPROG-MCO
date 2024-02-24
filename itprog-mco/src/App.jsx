import React from 'react';
import './App.css';
import SignInPage from "./pages/signinpage"; 
import PlaceholderContainer from '../components/PlaceholderContainer';
import CreateAccPage from "./pages/createaccpage";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shoppage";
import Navbar from '../components/Navbar';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <Router>
      {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<PlaceholderContainer><SignInPage setShowNavbar={setShowNavbar}/></PlaceholderContainer>} /> 
          <Route path="/createaccpage" element={<PlaceholderContainer><CreateAccPage setShowNavbar={setShowNavbar}/></PlaceholderContainer>} />
          <Route path="/signinpage" element={<PlaceholderContainer><SignInPage setShowNavbar={setShowNavbar}/></PlaceholderContainer>} />
          <Route path="/homepage" element={<PlaceholderContainer><HomePage setShowNavbar={setShowNavbar}/></PlaceholderContainer>} />
          <Route path="/shoppage" element={<PlaceholderContainer><ShopPage setShowNavbar={setShowNavbar}/></PlaceholderContainer>} />
        </Routes>
      </Router>
  );
}

export default App;
