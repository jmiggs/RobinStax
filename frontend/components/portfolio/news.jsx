import React from 'react';
import NewsItem from './news_item';

export default function News(props) {

  return(
    <div className="news-container">
      {props.news.map(newsItem =>
        <NewsItem title={newsItem.title.split(' - ')[0]} 
                  source={newsItem.title.split(' - ')[1]} 
                  url={newsItem.url}
                  img={newsItem.urlToImage}
                  date={newsItem.publishedAt}
                  key={newsItem.publishedAt}
        />
      )}
    </div>
  )
}
