import React from 'react';
import { Link } from 'react-router-dom';

export default function Empty(props) {

  return(
    <div className="empty-container">
      <div className="empty-header">
        You Don't Have Any Stocks!
      </div>
      <div className='empty-text'>
        <div>Use the Search Bar and enter a Company's Symbol, like AAPL.</div>
        <div>Then start building your portfolio!</div>
      </div>
    </div>
  )

}