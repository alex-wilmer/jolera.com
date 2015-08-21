import React from 'react'
import style from '../style/style.jsx'
import consts from '../style/style-consts.jsx'
import 'babel-core/polyfill'
import HomeTile from './home-tile.jsx'

class Home {
  render () {
    const backgroundImage = {
      backgroundImage: `url(img/bg1.png)`
    , backgroundSize: `cover`
    , backgroundPosition: `center center`
    , height: `calc(100% - 60px)`
    , padding: consts.SPACING
    }

    const marginBottom = {
      marginBottom: `300px`
    }

    style.slogan = {
      position: `absolute`
    , bottom: `100px`
    , color: `white`
    , big: { fontSize: `2em` }
    , small: { fontSize: `1.2em`, paddingTop: consts.SPACING }
    }

    style.homeTilesWrapper = {
      width: `270px`
    , margin: `0 auto`
    , padding: `${consts.SPACING} 0`
    }

    style.secondTileRow = {
      marginTop: consts.SPACING
    }

    const grey = {
      background: consts.GREY
    }

    const slogan = {
      big: `It's all about the ultimate service experience, Jolera's relentless pursuit of your satisfaction`
    , small: `We take ownership of your I.T. challenges and vision, transforming them into turnkey solutions.`
    }

    const homeTilesInfo = [
      { text: 'PRODUCTS AND SERVICES', link: '/' }
    , { text: 'ABOUT US', link: '/' }
    , { text: 'PRESS', link: '/' }
    , { text: 'SOCIAL RESPONSIBILITY', link: '/' }
    ]

    const homeTileStyle = {
      width: `125px`
    , height: `125px`
    , display: `inline-block`
    , color: `white`
    , backgroundColor: consts.BLUE
    , textAlign: `center`
    , verticalAlign: `top`
    , padding: `10px`
    , fontSize: `0.8em`
    }

    const topHomeTiles = homeTilesInfo.filter((info, i) => i < 2).map(homeTile)
    const bottomHomeTiles = homeTilesInfo.filter((info, i) => i > 1).map(homeTile)

    function homeTile (info, i) {
      const tileStyle = i
        ? Object.assign({}, homeTileStyle, { marginLeft: consts.SPACING })
        : homeTileStyle

      return <HomeTile text={ info.text } link={ info.link } style={ tileStyle } />
    }

    return (
      <div style={ marginBottom }>
        <div style={ backgroundImage }>
          <div style={ style.max }>
            <div style={ style.slogan }>
              <div style={ style.slogan.big }>{ slogan.big }</div>
              <div style={ style.slogan.small }>{ slogan.small }</div>
            </div>
          </div>
        </div>

        <div style={ grey }>
          <div style={ style.max }>
            <div style={ style.homeTilesWrapper }>
              <div>{ topHomeTiles }</div>
              <div style={ style.secondTileRow }>{ bottomHomeTiles }</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
