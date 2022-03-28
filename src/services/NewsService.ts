import axios from 'axios';

export type LatestNews = {
  gid: string,
  title: string,
  author: string,
  contents: string,
  date: string,
  appid: number
}
export async function getLatestNews(): Promise<LatestNews[]> {
  const response = await axios.get('http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=570&count=3&maxlength=300&format=json')
  return response?.data?.appnews?.newsitems
}