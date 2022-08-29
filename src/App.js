// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react'
import Navbar from "./Components/Navbar";
import TextArea from './Components/TextArea';

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
    <div >
    <Navbar title="Text Utility" mode={mode} toggleMode={toggleMode}/>
    <TextArea/>
    Hellow World
    </div>
  );
}

export default App;
