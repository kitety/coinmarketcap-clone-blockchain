import React, { useState } from 'react'
import fire from '../assets/fire.png'
import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'
import ReactSwitch from 'react-switch'
import Rate from './cmc-table/Rate'

const styles = {
  h1: 'text-3xl text-white',
  trendingWrapper: 'mx-auto max-x-screen-2xl',
  flexCenter: 'flex items-center',
}

const Trending = () => {
  const [checked, setChecked] = useState(false)
  return (
    <div className="text-white">
      <div className={styles.trendingWrapper}>
        {/* title and switch */}
        <div className="flex justify-between">
          <h1 className={styles.h1}>
            Today's Cryptocurrency Prices By Market Cap
          </h1>
          <div className="flex">
            <p className="text-gray-400">Highlights &nbsp;</p>
            <ReactSwitch
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </div>
        </div>
        {/* rate */}
        <div className="flex">
          <p className="text-gray-400">The Global crypto cap is $1,324T</p>{' '}
          <span>
            {/* rate */}
            <Rate isIncrement={true} rate={'0.53%'} />
          </span>
          <p>
            &nbsp; decrease over the last day.{' '}
            <span className="underline">Read More</span>
          </p>
        </div>
        <br />
        <div className={styles.flexCenter}>
          {/* <TrendingCard title="Trending" icon={fire} trendingData={trendingData}/> */}
          {/* <TrendingCard title="Biggest Gainers" icon={gainers} trendingData={trendingData}/> */}
          {/* <TrendingCard title="Recently Added" icon={recent} trendingData={trendingData}/> */}
        </div>
      </div>
    </div>
  )
}
export default Trending
