import React from 'react'
import { SEO, Nav, Footer } from '../components'
import Swiper from 'swiper'

import 'swiper/css/swiper.min.css'

interface HomeState {
  ni: string
}

export default class Home extends React.Component {
  
  constructor(props){
    super(props)
  }
  state: HomeState = {
    ni: '',
  }

  render(){
    return (
      <div className="container">
        <SEO title='首页' />
        <Nav />
        
        <Footer data={[1,2,3,4]} userName='123' />
      </div>
    )
  }
}