import React from 'react'
// import Link from 'next/link'
import { SEO, Nav, Footer } from '../components'
// import ScrollReveal from 'scrollreveal'
// import './main.scss'

export default class Home extends React.Component {
  // @ts-ignore
  static async getInitialProps({ query }) {
    return { id: query.id, }
  }

  componentDidMount() {
    const ani = ScrollReveal()
    var slideDown = {
      distance: '200%',
      origin: 'bottom',
    
    };
    ani.reveal('.a', {...slideDown, reset: true})
  }

  render() {
    return (
      <div className="container">
        <Nav />
        <main>
          <section className='a a'>1</section>
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