import React, { useState } from 'react'
import copy from "copy-to-clipboard";  
// import { Heading, Input1, Input2, Container, Button } from './Styles'

export default function TextArea(props) {
    const [text, setText] = useState("Enter your Text Here");
    const [btnText, setBtnText] = useState("Copy Text")
    const textChanged = (event) =>{
        // console.log("text is changed");
        setText(event.target.value);
        setBtnText("Copy Text")
    }
    
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        console.log("The text is change from \n>>> "+ text + ", to \n>>> " +newText)
    }

    const handleDownClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        console.log("The text is change from \n>>> "+ text + ", to \n>>> " +newText)
    }
    const handleCopy= ()=>{
        copy(text);
        console.log("the text is copied")
        // alert("the text is copied")
        setBtnText("Copied!")

    }
    const handleClear=()=>{
        setText("");
    }
    
  return (
    <div className="container">
    <div className="mb-3 my-3">
        <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode ==="light"?"dark":"light"}`}>Your textarea</label>
        <textarea className="form-control" value={text} onChange={textChanged} style={{backgroundColor: props.mode==="light"?"white":"#212529", color: props.mode==="dark"?"white":"black"}}  id="exampleFormControlTextarea1" rows="6"></textarea>
        <button type="button" onClick={handleUpClick} class="btn btn-primary my-3 mx-2">Convert to UpperCase</button>
        <button type="button" onClick={handleDownClick} className="btn  btn-primary my-3 mx-2">Convert to LowerCase</button>
        <button type="button" onClick={handleClear} className="btn btn-danger my-3 mx-2">Clear</button>
    </div>
    <hr  style={{color: props.mode==="dark"?"white":"black"}}  />
    <div>
        <label  className={`form-label text-${props.mode ==="light"?"dark":"light"}`}>Text Preview</label>
    <p className='fs-5 border rounded-1 px-2'  style={{backgroundColor: props.mode==="light"?"white":"#212529", color: props.mode==="dark"?"white":"black"}}  >{text}</p>
        <button type="button" onClick={handleCopy} className="btn btn-primary ">{btnText}</button></div>
    </div>
  )
}
