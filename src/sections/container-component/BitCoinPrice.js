import React, {Component} from 'react';
import PropTypes from 'prop-types'

class BitCoinPrice extends Component {
  state = { bpi: {}}

  componentDidMount () {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(data => {
        const { bpi } = data
        this.setState({ bpi })
      })
  }

  _renderCurrencies () {
    const { bpi } = this.state
    return Object.keys(bpi).map(currency => (
      <div key={currency}>
       1 BTC is {bpi[currency].rate}
       <span> {bpi[currency].code}</span>
      </div>
   ))
  }

  render() {
    return (
      <div>
        <h4>Bitcoin Price Index</h4>
        {this._renderCurrencies()}
      </div>
    )
  }
}

export default BitCoinPrice;