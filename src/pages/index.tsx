import Link from 'next/link'
import { SEO, Nav, Footer } from '../components'
// import '../static/styles/reset.scss'

export default function Home() {
  return (
    <div className="container">
      <SEO />
      <div dangerouslySetInnerHTML={{__html: '<p>saasasa</p><p>saasasa</p><p>saasasa</p><p>saasasa</p><p>saasasa</p><p>saasasa</p>'}}></div>
      <Link href='/a'><a>asasas</a></Link>
      <Footer />
    </div>
  )
}