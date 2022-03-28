import React from 'react';
import {LatestNews} from 'services/NewsService';
import './Card.css';


export function Card(props: LatestNews) {
  return (
    <div className='card'>
      <img src='noImage.png' width="250" height="180"/>
      <div className='content'>
        <h2>{props.title}</h2>
        <p>{props.contents}</p>
        <span>{props.author}</span>
      </div>
    </div>
  )
}