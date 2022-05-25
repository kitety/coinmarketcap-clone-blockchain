import type { NextPage } from 'next'
import Header from '../components/Header'
import Trending from '../components/Trending'
import CmcTable from '../components/cmc-table/CmcTable'

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
      <CmcTable />
    </div>
  )
}

export default Home
