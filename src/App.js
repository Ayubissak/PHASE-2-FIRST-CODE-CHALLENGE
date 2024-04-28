import logo from './logo.svg';
import './App.css';
import React from "react";
import AccountContainer from "./components/AccountContainer";
import './App.css';



function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}




export default App;
