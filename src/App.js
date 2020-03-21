import React from "react";
import logo from "./logo.svg";
// import './App.css';
import "./Dashlite.css";
import "./Message.css";

import Parent from "./components/Parent";
import WholeMessage from "./components/WholeMessage";

function App() {
  return (
    <div className="App">
      <div className="nk-body">
        <div className="nk-msg">
          <Parent />
          <WholeMessage />
        </div>
      </div>
    </div>
  );
}

export default App;
