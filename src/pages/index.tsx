import React from 'react'
import Link from 'next/link'
import { SEO, Nav, Footer } from '../components'
import { getData } from '../utils/fetch'

interface HomeProps {
  title: string;
  desc: string;
  route: string;
  data: number[]
}
interface HomeState {
  ni: string
}

export default class Home extends React.Component<HomeProps, HomeState> {
  static async getInitialProps (ctx){
    const d = await getData('http://localhost:3000/api/news/1/10')
    console.log(d,'----')
    return { a: 1, b:2, c:3}
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
        <SEO />
        <div dangerouslySetInnerHTML={{__html: '<p>saasasa</p><p>saasasa</p><p>saasasa</p><p>saasasa</p><p>saasasa</p><p>saasasa</p>'}}></div>
        <Link href='/a'><a>asasas</a></Link>
        <Footer data={[1,2,3,4]} userName='123' />
      </div>
    )
  }
}