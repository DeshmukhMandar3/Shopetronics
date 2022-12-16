import logo from './logo.svg';
import Navbar from "./components/Navbar"
import './App.css';
import Deal from "./components/Deal"
import React from "react";
import Trending from "./components/Trending"
import NewForYou from "./components/NewForYou"
import EnjoyLife from "./components/EnjoyLife"


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Deal/>
      <Trending/>
      <NewForYou/>
      <EnjoyLife/>
    </div>
  );
}

export default App;
