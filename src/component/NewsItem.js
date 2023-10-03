import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2023/09/30/1600x900/2000_notes_withdrawal_rbi_gold_silver_1684666158126_1696037505729.JPG":imageUrl} className="card-image-top " />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} </p><h6>Breaking News <span class="badge bg-secondary">New</span></h6>
            <p className="card-text"><small class="text-body-secondary"> By { !author ? " Unknown": author} on {new Date(date).toGMTString() }</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more 
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
