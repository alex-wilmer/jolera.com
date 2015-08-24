import React from 'react'
import Banner from '../banner.jsx'

export default class About {
  render () {
    const text = {
      big: `About Us`
    , small: `Lorem ipsum..`
    }

    return (
      <Banner text={ text } image='img/bg1.png' wide={ this.props.wide } />
    )
  }
}
