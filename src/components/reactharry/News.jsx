import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default class News extends Component {
static defaultProps={
  country:'in',
  category:'general',
}
static propTypes={
country:PropTypes.string,
category:PropTypes.string,

}
  constructor(){
    super();
    console.log("news constructor");
    this.state={
      articles:[],
      loading:false,
      page:1,

    }
   
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=de0661742b8a4fc2901b3ce38a22747e&page=1=de0661742b8a4fc2901b3ce38a22747e&page=1`;
    let data= await fetch(url);
    this.setState({loading:true });

    let json=await data.json();
    this.setState({articles:json.articles,totalArticles:json.totalResults});

}
haandleprevious=async ()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=de0661742b8a4fc2901b3ce38a22747e&page=1=de0661742b8a4fc2901b3ce38a22747e&page=${this.state.page-1}`;
  let data= await fetch(url);
  let json=await data.json();
  this.setState({loading:true });

this.setState({

  page:this.state.page-1,
  articles:json.articles,
  loading:false,
});
}
handlenextclick=async ()=>{
  if(!(this.state.page+1>Math.ceil(this.totalArticles/20)))
{
 let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=de0661742b8a4fc2901b3ce38a22747e&page=1=de0661742b8a4fc2901b3ce38a22747e&page=${this.state.page+1}`;
 this.setState({loading:true });
  let data= await fetch(url);
  let json=await data.json();

this.setState({

  page:this.state.page+1,
  articles:json.articles,
  loading:false,
});
}
}
  render() {
    // let {country}=this.props;

    return (
      <div className="container  row my-3">
        <h1 className="text-center">New monkey headlins</h1>
       { this.state.loading && <Spinner/>}
        { this.state.articles.map((element)=>{
          return (
          <div className="col-md-4" key={ element.url}>
          <Newsitems  title={element.title?element.title:""} description={element.description?element.description.slice(0,50):""} 
          imageurl={element.urlToImage?element.urlToImage:""} newsurl={element.url?element.url:""} author={element.author} date={element.publishedAt}/>
          </div>
          );
        })}
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.haandleprevious}> &larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.totalArticles/20)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
          </div>
      </div>
    )
  }
}
