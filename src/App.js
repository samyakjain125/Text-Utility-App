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
      document.body.style.backgroundColor = "rgb(33 37 41 / 85%)"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white"
    }
  }
 

  return (
    <div >
    <Navbar title="Text Utility" mode={mode} toggleMode={toggleMode}/>
    <TextArea mode={mode}/>
    </div>
  );
}

export default App;
