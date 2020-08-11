import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Directory from './pages/Directory';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Wrapper>
          <Route exact path = "/" component = {Directory} />       
       
          </Wrapper>
      </div>
    </Router> 
  );
}

export default App;
