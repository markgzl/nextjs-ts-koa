import React from 'react'
import Link from 'next/link'
import { SEO, Nav, Footer } from '../components'
import { getData } from '../utils/fetch'
import axios from 'axios'

interface HomeProps {
  title: string;
  desc: string;
  route: string;
  data: number[],
  id: number;
  newsList: NewsItem[]
}
interface HomeState {
  ni: string
}
interface NewsItem{
  id: number;
  title: string;
  subtitle?: string;
  content?: string;
  author?: string;
  source?: string;
  imgurl?: string
}
interface NewsData{
  total: number;
  hasMore: Boolean;
  data: NewsItem[]
}
interface News{
  code: number;
  data: NewsData,
  msg?: string
}
export default class Home extends React.Component<HomeProps, HomeState> {
  static async getInitialProps ({query}){
    const d = await getData<News>('http://localhost:3000/api/news/1/10')
    return {id: query.id, newsList: d.data.data}
  }
  constructor(props: HomeProps){
    super(props)
  }
  state: HomeState = {
    ni: '',
  }
  add = () => {
    this.setState({
      ni: 'nihao '
    })
  }
  render(){
    console.log(this.props)
    return (
      <div className="container">
        {this.props.id}
        <SEO />
        <Nav />
        {this.props.newsList.map(news=>{
          return <div key={news.id}>
            <img src={news.imgurl} alt=""/>
             <div dangerouslySetInnerHTML={{__html: news.content}}></div>
          </div>
        })}
        <Link href='/a'><a>asasas</a></Link>
        <Footer data={[1,2,3,4]} userName='123' />
      </div>
    )
  }
}