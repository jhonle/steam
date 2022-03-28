import React, {useEffect, useState} from 'react';
import {getLatestNews, LatestNews} from 'services/NewsService';
import {Card} from './parts';
import './News.css';

export function News() {

  const [latestNews, setLatestNews] = useState<LatestNews[]>([])

  useEffect(() => {
    getNews()
  }, [])

  async function getNews() {
    try {
      const news = await getLatestNews()
      setLatestNews(news)
    } catch(error) {
      setLatestNews([])
    }
  }
  return (
    <div className='main-section'>
      <h1>LATESTS NEWS</h1>
      {latestNews.map(latesNew =>  (
        <Card key={latesNew.gid}
          {...latesNew}
        />
      ))}
    </div>
  )
}