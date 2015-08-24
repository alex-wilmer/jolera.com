import React from 'react'
import Banner from '../banner.jsx'

export default class ProductsAndServices {
  render () {
    const text = {
      big: `Proucts and Services`
    , small: `Deilvering the promise`
    }

    return (
      <Banner text={ text } image='img/bg1.png' wide={ this.props.wide } />
    )
  }
}
