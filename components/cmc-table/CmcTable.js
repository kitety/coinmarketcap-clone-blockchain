import React, { useCallback, useContext, useEffect, useState } from 'react'
import btc from '../../assets/btc.png'
import { CoinMarketContext } from '../../context/context'
import CmcTableHeader from './CmcTableHeader'
import CmcTableRow from './CmcTableRow'

const CmcTable = () => {
  let { getTopTenCoins } = useContext(CoinMarketContext)
  const [coinData, setCoinData] = useState([])
  console.log(coinData)
  const setData = useCallback(async () => {
    try {
      let apiResult = await getTopTenCoins()
      let filterResponse = []

      for (let i = 0; i < apiResult.length; i++) {
        const element = apiResult[i]
        if (element.cmc_rank <= 10) {
          filterResponse.push(element)
        }
      }
      setCoinData(filterResponse)
    } catch (e) {
      console.log(e.message)
    }
  }, [getTopTenCoins])

  useEffect(() => {
    setData()
  }, [setData])
  return (
    <div className="font-bold text-white">
      <div className="mx-auto max-w-screen-2xl">
        <table className="w-full">
          {/* cmctableheader */}
          <CmcTableHeader />
          <tbody className="border-b border-gray-800 text-[0.93rem] text-white">
            {coinData.map((coin, index) => (
              <CmcTableRow
                key={coin.id}
                coinName={coin.name}
                startNum={coin.cmc_rank}
                coinSymbol={coin.symbol}
                coinIcon={btc}
                showBuy={true}
                hRate={coin.quote.USD.percent_change_24h}
                price={coin.quote.USD.price}
                dRate={coin.quote.USD.percent_change_7d}
                hRateIsIncrement={true}
                marketCapValue={coin.quote.USD.market_cap}
                volumeCryptoValue={coin.quote.USD.volume_24h}
                volumeValue={coin.total_supply}
                circulatingSupply={coin.circulating_supply}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default CmcTable
