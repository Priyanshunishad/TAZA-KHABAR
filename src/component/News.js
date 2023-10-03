import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category:'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string,

  };

  constructor() {
    super();
    console.log('Hello, I am the constructor of the News component');
    this.state = {
      articles: [],
      loading: true, // Initialize loading as true
      page: 1,
      totalResult: 0, // Initialize totalResult
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d493c7fef0bb47c3826a7fbad4ebc8c6&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResult: parsedData.totalResults, loading: false }); // Set loading to false after data is fetched
  }

  handlePrevClick = async () => {
    console.log('Previous');

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d493c7fef0bb47c3826a7fbad4ebc8c6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    console.log('Next');
    if (this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)) {
      // Handle the case when there are no more pages to load
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d493c7fef0bb47c3826a7fbad4ebc8c6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'40px'}}>TAZA KHABAR - Top Headlines</h1>
        {this.state.loading ? (
          <div className='text-center'>Loading more news...  </div>
        ) : (
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ''}
                    description={element.description ? element.description : ''}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              );
            })}

            <div className="container d-flex justify-content-between">
              <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>
                &larr; Previous
              </button>
              <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>
                Next &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default News;
