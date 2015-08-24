import React from 'react'
import Banner from '../banner.jsx'

export default class Partnerships {
  render () {
    const text = {
      big: `Partnerships`
    , small: `Striving to make a difference in our world`
    }

    return (
      <Banner text={ text } image='img/bg1.png' wide={ this.props.wide } />
    )
  }
}
