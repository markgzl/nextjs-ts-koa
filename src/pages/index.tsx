import Head from 'next/head'
import { SEO, Nav, Footer } from '../components'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head> 
      <SEO></SEO>

      <Nav>
        nav
      </Nav>
      
      <Footer />


    </div>
  )
}
