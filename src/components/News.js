

import React, {useEffect, useState} from 'react';
import Newsitems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
const News =(props)=>{
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;


  useEffect(() => {
    updateNews();
  }, [])
  
  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(20);
    let parseData = await data.json();
    console.log(parseData);
    props.setProgress(100);
    setArticle(parseData.articles);
    setLoading(false);
    setTotalResults(parseData.totalResults)
     
  };

  const handlePrevClick = async () => {
    setPage(page - 1);
    updateNews();
  };

  const handleNextClick = async () => { 
    setPage(page + 1)
    updateNews();
  };
  
  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticle(article.concat(parsedData.articles))
    setLoading(false);
    setTotalResults(parsedData.totalResults)
    
  };
    return (
      <>
        <h2 className="text-center" style={{ margin: '30px 0px' , marginTop: '90px'}}> 
          NewsMonkey - Top Headlines
        </h2>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll dataLength={article.length} next={fetchMoreData} hasMore={article.length !== totalResults} loader={<Spinner />}>
          <div className="container">
        <div className="row">
          {article.map((element) => (
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
            disabled={this.state.page + 1 >= Math.ceil(this.state.totalResults / props.pageSize)}
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
}
News.defaultProps = {
  country: 'in',
  pageSize: 7,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;