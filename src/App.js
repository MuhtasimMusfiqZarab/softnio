import React from "react";
import logo from "./logo.svg";
// import './App.css';
import "./Dashlite.css";
import "./Message.css";

import Parent from "./components/Parent";

function App() {
  //initializing selected item

  return (
    <div className="App">
      <div className="nk-body">
        <div>
          <Parent />
        </div>
      </div>
    </div>
  );
}

export default App;
