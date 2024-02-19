import React from 'react';
import './App.css';
import SignInPage from "./pages/signinpage"; 
import PlaceholderContainer from '../components/PlaceholderContainer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PlaceholderContainer><SignInPage /></PlaceholderContainer>} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
