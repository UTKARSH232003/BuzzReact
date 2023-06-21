import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
    static defaultProps = {
        country : 'in',
        pageSize : 7,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(){
        super();
        this.state= {
            article : [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount(){
        console.log("component runned")
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e0a07c69d744eb58c3178a5fefed116&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading: true});
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            article: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
    }
  render() {
    console.log("return runned")
    
    let handlePrevClick = async () => {
        console.log("prev clicked")
        let url= `https://newsapi.org/v2/top-headlines?country${this.props.country}&category=${this.props.category}&apiKey=5e0a07c69d744eb58c3178a5fefed116&page=${this.state.page -1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true});
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            page: this.state.page - 1,
            article: parseData.articles,
            loading: false
        })
    }
    let handleNextClick = async () => {
        console.log("next clicked")
        if(!(this.state.page + 1 >= Math.ceil(this.state.totalResults/this.props.pageSize))){
 
            let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e0a07c69d744eb58c3178a5fefed116&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({loading: true});
            let data = await fetch(url);
            let parseData = await data.json()
            this.setState({
                page: this.state.page + 1,
                article: parseData.articles,
                loading: false
            })
        }
    }
    return (
      <div className="container my-3">
          <h2 className="text-center" style={{margin: '30px 0px'}}>NewsMonkey - Top Headlines</h2>
          {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.article.map((element) => {
              return <div className="col-md-4" key={element.url} >
                <Newsitems title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageurl= {element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt.slice(0, 10)} author= {element.author}/>
                </div>
          })}
            
        <div className="container d-flex justify-content-between">
            <button type="button" className="btn btn-dark" onClick={handlePrevClick} disabled={this.state.page<=1}> &larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 >= Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
        </div>
      </div>
    )
  }
}
