import React from 'react'
import Image from 'next/image'
import MoreButton from './MoreButton'
import TrendingCardRow from './TrendingCardRow'

const styles = {
  trendingCard: 'w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3 ',
  trendingCardWrapper: 'flex item-center justify-between',
}
const TrendingCard = ({ title, icon, trendingData }) => {
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className="flex">
          {icon && <Image src={icon} width={27} height={27} alt={'icon'} />}
          &nbsp;&nbsp;
          <p className="font-bold">{title}</p>
        </div>
        <MoreButton />
      </div>
      <br />
      {trendingData.map((item, index) => {
        return (
          <TrendingCardRow
            key={index}
            icon={item.icon}
            rate={item.rate}
            name={item.name}
            title={item.title}
            number={item.number}
            symbol={item.symbol}
            isIncrement={item.isIncrement}
          />
        )
      })}
    </div>
  )
}
export default TrendingCard
