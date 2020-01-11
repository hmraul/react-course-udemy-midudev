import React from 'react'


const BitCoinPresenter = (props) => {
  const bpi = props.bpi
    return (
      <div key={bpi.code}>
         1 BTC is {bpi.rate}
         <span> {bpi.code}</span>
      </div>
    )
}

export default BitCoinPresenter

