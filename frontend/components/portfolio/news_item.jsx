import React from 'react';

export default function NewsItem(props) {

  return(
    <div>
      <div className="news-source">{props.source}</div>
      <div className="news-info-container">
        <div className="news-title">
          {props.title}
        </div>
      <img className="news-img" src={props.img} width="110px" height="80px" />
      </div>
    </div>

  )

}