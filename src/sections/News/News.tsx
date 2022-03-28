import React, {useEffect, useState} from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
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
    <div>
      <nav className='nav'>
        <input type='text' className='steam-input' placeholder='STEAM ID' />
        <button type='button' className='avatar'>
        <Avatar size={64} icon={<UserOutlined />} />

        </button>
      </nav>
      <div className='main-section'>
        <h1>LATESTS NEWS</h1>
        {latestNews.map(latesNew =>  (
          <Card key={latesNew.gid}
            {...latesNew}
          />
        ))}
      </div>
    </div>
  )
}