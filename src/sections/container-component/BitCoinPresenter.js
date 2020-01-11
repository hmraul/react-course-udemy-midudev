import React from 'react'
import BitCoinIndex from './BitCoinIndex'

const BitCoinPresenter = (props) => {
  const bpi = props.bpi
  
  return(
  Object.keys(bpi)
      .map(currency => ( 
        <BitCoinIndex key={currency} bpi = {bpi[currency]} />        
  )))
}

export default BitCoinPresenter

