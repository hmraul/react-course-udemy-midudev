import React, {Component} from 'react';
import PropTypes from 'prop-types'
import BitCoinPresenter from './BitCoinPresenter'

class BitCoinPriceContainer extends Component {
  state = { bpi: {}}

  componentDidMount () {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(data => {
        const { bpi } = data
        this.setState({ bpi })
      })
  }

  render() {    
    return (
        <BitCoinPresenter bpi = {this.state.bpi} />        
    )
  }
}

export default BitCoinPriceContainer;