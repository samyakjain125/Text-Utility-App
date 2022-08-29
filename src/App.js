// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react'
import Navbar from "./Components/Navbar";

function App() {

  const [mode, setMode] = useState("light");
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
    }
    else{
      setMode("light");
    }
  }

  return (
    <>
    <Navbar title="Text Utility" mode={mode} toggleMode={toggleMode}/>
    Hellow World
    </>
  );
}

export default App;
