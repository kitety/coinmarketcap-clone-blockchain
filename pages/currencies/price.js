import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import CoinDetails from '../../components/CoinDetails'

const Price = () => {
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
    <div>
      <Header />
      <CoinDetails coinName={coinName} coinSymbol={coinSymbol} price={price} />
    </div>
  )
}
export default Price
