import React from 'react'
import style from '../style/style.jsx'
import consts from '../style/style-consts.jsx'
import 'babel-core/polyfill'
// components
import HomeTiles from './home-tiles.jsx'
import WhichOneAreYou from './which-one-are-you.jsx'
import OurServices from './our-services.jsx'
import OurPartnerships from './our-partnerships.jsx'

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

    const sloganStyle = {
      position: `absolute`
    , bottom: `100px`
    , color: `white`
    , big: { fontSize: `2em` }
    , small: { fontSize: `1.2em`, paddingTop: consts.SPACING }
    }

    const grey = {
      background: consts.GREY
    }

    const slogan = {
      big: `It's all about the ultimate service experience, Jolera's relentless pursuit of your satisfaction`
    , small: `We take ownership of your I.T. challenges and vision, transforming them into turnkey solutions.`
    }

    const homeTilesWrapper = {
      width: `270px`
    , margin: `0 auto`
    , padding: `${consts.SPACING} 0`
    }

    const homeTiles = {
      info: [
        { text: 'PRODUCTS AND SERVICES', link: '/' }
      , { text: 'ABOUT US', link: '/' }
      , { text: 'PRESS', link: '/' }
      , { text: 'SOCIAL RESPONSIBILITY', link: '/' }
    ]

    , style: {
        width: `125px`
      , height: `125px`
      , display: `inline-block`
      , color: `white`
      , backgroundColor: consts.BLUE
      , textAlign: `center`
      , verticalAlign: `top`
      , padding: `10px`
      , fontSize: `0.8em`
      , secondTileRow: { marginTop: consts.SPACING }
      }
    }

    return (
      <div style={ marginBottom }>
        <div style={ backgroundImage }>
          <div style={ style.max }>
            <div style={ sloganStyle }>
              <div style={ sloganStyle.big }>{ slogan.big }</div>
              <div style={ sloganStyle.small }>{ slogan.small }</div>
            </div>
          </div>
        </div>

        <div style={ grey }>
          <div style={ style.max }>
            <HomeTiles style={ homeTilesWrapper } tiles={ homeTiles } />

            <WhichOneAreYou />
            <OurServices />

            <div><hr /></div>

            <OurPartnerships />

            <div>
              <div>
                <div>If you would like to learn more about our products and services</div>
                <a>Contact Us</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Home
