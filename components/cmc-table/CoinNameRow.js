import React from 'react'
import Image from 'next/image'
const CoinNameRow = ({ name, icon, clicked }) => {
  return (
    <div className="flex cursor-pointer" onClick={clicked}>
      <Image src={icon} alt={name} width={20} height={20} />
      <p>{name}</p>
    </div>
  )
}
export default CoinNameRow
