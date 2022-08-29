import React from 'react'

export default function TextArea() {
    
  return (
    <div className="container" >
    <div className="mb-3 my-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Your textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
    </div>
    </div>
  )
}
