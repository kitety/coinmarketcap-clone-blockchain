import type { NextPage } from 'next'
import Header from '../components/Header'
import Trending from '../components/Trending'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      {/*  Header*/}
      <Header />
      <div className="mt-10"></div>
      <Trending />
      {/*  Trending*/}
      <div className="mt-20"></div>
      {/*  CmcTable*/}
    </div>
  )
}

export default Home
