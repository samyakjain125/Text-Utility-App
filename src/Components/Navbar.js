import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode==="light"?"dark":"light"}`} href="textutility-bysam.netlify.app">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==="light"?"dark":"light"}`} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
        <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#">About</a>
        </li>
      </ul>
      <a href="https://github.com/samyakjain2431/Todo-Monkey" target="blank" rel="noopener noreferrer" style={{"padding": "6px 16px","marginRight":"15px", "backgroundColor":"#373737cc","boxShadow":"1px 1px 5px #808080b0", "color": "white","borderRadius":"42px", "textDecoration":"none"}}>{`</> GitHub Code`}</a>
      <a href="https://samyakjain.super.site" target="blank" rel="noopener noreferrer" style={{"padding": "6px 16px","margin-right":"15px", "backgroundColor":"#932cff", "color": "white","borderRadius":"42px", "textDecoration":"none"}}>Made by Samyak Jain</a>
      <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`} >
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div>
      
    </div>
  </div>
</nav>
    </div>
  )
}
