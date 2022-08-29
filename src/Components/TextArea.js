import React, { useState } from 'react'

export default function TextArea() {
    const [text, setText] = useState("Enter your Text Here");
    const textChanged = (event) =>{
        // console.log("text is changed");
        setText(event.target.value);
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
    
  return (
    <div className="container">
    <div className="mb-3 my-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Your textarea</label>
        <textarea className="form-control" value={text} onChange={textChanged} id="exampleFormControlTextarea1" rows="6"></textarea>
    </div>
        <button type="button" onClick={handleUpClick} class="btn btn-sm btn-primary my-3 mx-2">Convert to UpperCase</button>
        <button type="button" onClick={handleDownClick} className="btn btn-sm btn-primary my-3 mx-2">Convert to LowerCase</button>
        <button type="button" className="btn btn-sm btn-primary my-3 mx-2">Primary</button>
        <button type="button" className="btn btn-sm btn-primary my-3 mx-2">Primary</button>
    </div>
  )
}
