import React from 'react'
import More from '../../assets/svg/more'
import Star from '../../assets/svg/star'
import Rate from './Rate'
import { useRouter } from 'next/router'

const styles = {
  tableRow: `text-white border-b border-gray-800 text-[0.93rem]`,
}
const graphImages = [
  'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
  'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
  'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
  'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
  'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
  'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg',
  'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg',
  'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
  'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg',
  'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg',
  'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg',
  'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg',
]

const CmcTableRow = ({
  starNum,
  coinName,
  coinIcon,
  coinSymbol = '---',
  price = '----',
  hRate = '---',
  dRate = '---',
  hRateIsIncrement,
  dRateIsIncrement,
  marketCapValue = '---',
  volumeValue = '---',
  volumeCryptoValue = '---',
  circulatingSupply = '---',
}) => {
  const getRandomGraph = () => {
    const randomInt = Math.floor(10 * Math.random()) + 1
    return graphImages[randomInt]
  }
  const router = useRouter()
  const viewCoinDetails = () => {
    router.push(
      `/currencies/info?symbol=${coinSymbol}&coin=${coinName}&price=${price}`
    )
  }
  const viewPrice = () => {
    router.push(
      `/currencies/price?symbol=${coinSymbol}&coin=${coinName}&price=${price}`
    )
  }

  const formatNum = (num) => {
    return Number(num.toFixed(2)).toLocaleString()
  }

  return <div>CmcTableRow</div>
}
export default CmcTableRow
