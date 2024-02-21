import React from 'react';
import './App.css';
import SignInPage from "./pages/signinpage"; 
import PlaceholderContainer from '../components/PlaceholderContainer';
import CreateAccPage from "./pages/createaccpage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<PlaceholderContainer><SignInPage /></PlaceholderContainer>} /> 
          <Route path="/createaccpage" element={<PlaceholderContainer><CreateAccPage /></PlaceholderContainer>} />
          <Route path="/signinpage" element={<PlaceholderContainer><SignInPage /></PlaceholderContainer>} />
        </Routes>
      </Router>
  );
}

export default App;
