import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

  componentDidMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;
    return crypto.data.map((coin) =>
      <CoinCard
        key={coin.name}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
      />
    )
  }

  render () {
    const { crypto } = this.props;
    return (
      <View>
        {this.renderCoinCards()}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)
