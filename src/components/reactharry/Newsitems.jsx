import React, { Component } from 'react'

export default class Newsitems extends Component {
 

  render() {
    let {title,description,imageurl,newsurl,author,date}=this.props;
    return (
      <div>
        <div className="card" >
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}<span className="badge bg-secondary">New</span></h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsurl} target='_blank' className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
