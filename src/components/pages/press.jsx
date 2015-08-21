import React from 'react'
import Banner from '../banner.jsx'
import style from '../../style/style.jsx'

class Press {
  render () {
    const tiles = [ `one`, `two`, `three`]

    const tilediv = tiles.map(t => <div>{ t }</div>)

    const bannerText = {
      big: `Featured Article`
    , small: `Learn more about our projects and acheivements`
    }

    const bannerImage = `img/bg1.png`

    return (
      <div style={ style.footerMargin }>
        <Banner text={ bannerText } image={ bannerImage } />

        <div>
          <div>{ tilediv }</div>
        </div>
      </div>
    )
  }
}

export default Press
