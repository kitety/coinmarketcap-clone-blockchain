import React from 'react'
import Image from 'next/image'
import Rate from './cmc-table/Rate'

const styles = {
  trendingCardRow: 'flex items-center justify-between mb-4 text-[0.93rem]',
}
const TrendingCardRow = ({ number, symbol, icon, isIncrement, rate, name }) => {
  return (
    <div className={styles.trendingCardRow}>
      <p className="opacity-40">{number}</p>
      <div className="flex w-full">
        <div className="mx-5">
          {icon && <Image src={icon} width={20} height={20} />}
        </div>
        <p className="font-bold">
          {name}&nbsp;
          <span className="text-gray-400">{symbol}</span>
        </p>
      </div>
      <Rate isIncrement={isIncrement} rate={rate} />
    </div>
  )
}
export default TrendingCardRow
