
// import { PropTypes } from '@material-ui/core';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navvv  extends Component {
   
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" style={{color:'white'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">News Monkey</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="/health">Health</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/buisness">Buisness</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
              
             
            </ul>
            
          </div>
        </div>
      </nav>
        )
  }
}
