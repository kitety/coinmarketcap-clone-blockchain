import React from 'react'
import ChevronDown from '../../assets/svg/chevronDown'
import ChevronUp from '../../assets/svg/chevronUp'

const styles = {
  rate: 'rate flex items-center',
  green: 'ml-2 text-[#17c784]',
  red: 'ml-2 text-[#ea3943]',
}
const Rate = ({ isIncrement, rate }) => {
  return (
    <div className={styles.rate}>
      {isIncrement ? (
        <ChevronUp fill={'#17C784'} />
      ) : (
        <ChevronDown fill={'#ea3943'} />
      )}
      <p className={isIncrement ? styles.green : styles.red}>{rate}</p>
    </div>
  )
}

export default Rate
