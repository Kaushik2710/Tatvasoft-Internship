import React, { Component } from 'react';
import loadin from "../reactharry/200w.webp";

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center' >
        <img src={loadin}  style={{mixBlendMode:'difference'}} alt="" />
      </div>
    )
  }
}
