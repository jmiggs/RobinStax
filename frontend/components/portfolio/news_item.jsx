import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsItem(props) {

  return(
    <a href={`${props.url}`}>
      <div className="news-item">
        <div className="news-item-container">
          <div className="news-source">{props.source}</div>
          <div className="news-info-container">
            <div className="news-title">
              {props.title}
            </div>
          <img className="news-img" src={props.img} width="110px" height="80px" />
          </div>
        </div>
      </div>
    </a>
  
  )

}