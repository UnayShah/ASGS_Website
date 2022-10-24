import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ImageShowcase from '../components/ImageShowcase'
import TextArea1 from '../components/TextArea1'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AS Graphic Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <TextArea1 />
      <ImageShowcase />
      <Footer/>
    </div>
  )
}

export default Home;