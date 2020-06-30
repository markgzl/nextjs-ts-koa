import React from 'react'
// import Link from 'next/link'
// import { SEO, Nav, Footer } from '../components'
// import ScrollReveal from 'scrollreveal'
import './main.scss'

export default class Home extends React.Component{
  static async getInitialProps({ query }) {
    return { id: query.id, }
  }
  
  componentDidMount(){
    console.log(this.props,'======',window)
    var slideUp = {
      distance: '150%',
      origin: 'bottom',
      opacity: null
    };
    var slideIn = {
      distance: '150px',
      origin: 'left',
    };
    const ani = window.ScrollReveal({mobile: false, reset: true})
    const a = ani.reveal('.e',slideUp,)
    ani.reveal('.c',slideIn,)
    ani.reveal('.container', {opacity: 0.3, delay: 300})
    ani.clean('.container')
  }

  render() {
    return (
      <div className="container">
        <header className='header'>
        Header
        </header>
        <main>
          <section className='a a'>
          1
          </section>
          <section className='a b'>2</section>
          <section className='a b'>3</section>
          <section className='a c'>4</section>
          <section className='a c'>4</section>
          <section className='a c'>4</section>
          <section className='a c'>4</section>
          <section className='a c'>4</section>
          <section className='a d'>5</section>
          <section className='a e'>6</section>
          <section className='a e'>6</section>
          <section className='a e'>6</section>
          <section className='a e'>6</section>
          <section className='a e'>6</section>
          <section className='a e'>6</section>
          <section className='a f'>7</section>

        </main>
        <footer>

        </footer>
        
        
      </div>
    )
  }
}