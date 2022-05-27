import Header from '../../components/Header'
import solana from '../../assets/solana.png'
import Usd from '../../assets/svg/usd'
import { useEffect, useState } from 'react'
import * as PropTypes from 'prop-types'
import CmcPriceConverter from '../../components/CmcPriceConverter'
import Graph from '../../components/Graph'

const styles = {
  activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
  tabItem: `px-2 cursor-pointer`,
  tabContainer: `flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm`,
  info: `min-h-screen`,
  main: `text-white mx-auto max-w-screen-2xl`,
  flexStart: `flex items-start`,
  flexBetween: `flex justify-between`,
  flexBetweenCenter: `flex justify-between items-center`,
  tabContainerWrapper: `p-10 pl-0 pr-0 w-2/3`,
  flexCenter: `flex items-center`,
}

const Info = () => {
  const [coinName, setCoinName] = useState('')
  const [coinSymbol, setCoinSymbol] = useState('')
  const [price, setPrice] = useState('')
  console.log(coinName, coinSymbol, price)

  const getURLData = () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    setCoinName(urlParams.get('coin'))
    setCoinSymbol(urlParams.get('symbol'))
    setPrice(urlParams.get('price').toLocaleString())
  }
  useEffect(() => {
    getURLData()
  }, [])

  return (
    <div className={styles.info}>
      <Header />
      <main className={styles.main}>
        <div className={styles.flexStart}>
          <div className={styles.tabContainerWrapper}>
            <div className={styles.flexBetween}>
              <div className={styles.tabContainer}>
                <p className={styles.activeTab}>Price</p>
                <p className={styles.tabItem}>Market Cap</p>
                <p className={styles.tabItem}>Trending View</p>
                <p className={styles.tabItem}>History</p>
              </div>
              <div className={styles.tabContainer}>
                <p className={styles.activeTab}>1D</p>
                <p className={styles.tabItem}>2D</p>
                <p className={styles.tabItem}>1M</p>
                <p className={styles.tabItem}>3M</p>
                <p className={styles.tabItem}>1Y</p>
                <p className={styles.tabItem}>YTD</p>
                <p className={styles.tabItem}>ALL</p>
                <p className={styles.tabItem}>LOG</p>
              </div>
            </div>
            <br />
            {/* graph */}
            <Graph />
            <br />
            <div className={styles.flexBetweenCenter}>
              <div className="flex">
                <div className={styles.flexCenter}>
                  <input type="checkbox" className="outline-none" />
                  &nbsp; USD
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className={styles.flexCenter}>
                  <input type="checkbox" className="outline-none" />
                  &nbsp; BTC
                </div>
              </div>
              <p>
                Want More Data?&nbsp;
                <span className="text-[#6188ff]">Check Our Api</span>
              </p>
            </div>
            <br />
            <br />
            <CmcPriceConverter
              from={coinName}
              fromSymbol={coinSymbol}
              fromLogo={solana}
              toLogo={<Usd />}
              price={price}
              to="United States Dollars"
              toSymbol="USD"
            />
          </div>
          <div className="ml-5 pt-10">{/* Chat */}</div>
        </div>
      </main>
    </div>
  )
}
export default Info
