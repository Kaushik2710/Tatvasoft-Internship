
import React, { Component } from 'react'
import  Navvv from "./Navvv";
import News from './News';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
export default class Classhar extends Component {

  render() {
    return (
      
        <BrowserRouter>
        <Navvv/>
        
      <Routes>
        <Route exact path="/" element={<News key="/" country="us"  ctegory="general" />}></Route>
        <Route exact path="/buisness" element={<News  key="buisness"country="us" category="buisness"/>}></Route>
        <Route exact path="/sports" element={<News key="sports" country="us" category="sports"/>}></Route>
        <Route exact path="/technology" element={<News key="technology" country="us" category="technology"/>}></Route>
        <Route exact path="/health" element={<News key="health" country="us" category="health"/>}></Route>
        </Routes>
       </BrowserRouter>
     
    )
  }
}
