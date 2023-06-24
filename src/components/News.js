

import React, { Component } from 'react';
import Newsitems from './Newsitems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 7,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  
  
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async componentDidMount() {
    this.updateNews();
  }

  async updateNews(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e0a07c69d744eb58c3178a5fefed116&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(20);
    let parseData = await data.json();
    console.log(parseData);
    this.props.setProgress(100);
    this.setState({
      article: parseData.articles,
      loading: false,
      totalResults: parseData.totalResults,
    }); 
  };

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => { 
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  
  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e0a07c69d744eb58c3178a5fefed116&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      article: this.state.article.concat(parseData.articles),
      loading: false,
      totalResults: parseData.totalResults,
    });
  };
  render() {
    return (
      <>
        <h2 className="text-center" style={{ margin: '30px 0px' }}> 
          NewsMonkey - Top Headlines
        </h2>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll dataLength={this.state.article.length} next={this.fetchMoreData} hasMore={this.state.article.length !== this.state.totalResults} loader={<Spinner />}>
          <div className="container">
        <div className="row">
          {this.state.article.map((element) => (
              <div className="col-md-4" key={element.url}>
                <Newsitems title={element.title ? element.title.slice(0, 45) : ''}
                  description={element.description ? element.description.slice(0, 88) : ''}
                  imageurl={element.urlToImage}
                  newsUrl={element.url}
                  publishedAt={element.publishedAt.slice(0, 10)}
                  author={element.author}
                  source={element.source.name}
                />
              </div>
            ))}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={this.state.page + 1 >= Math.ceil(this.state.totalResults / this.props.pageSize)}
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}
