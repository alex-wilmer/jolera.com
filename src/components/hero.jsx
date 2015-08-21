import React from 'react'
import consts from '../style/style-consts.jsx'
import style from '../style/style.jsx'

class Hero {
  render () {
    const backgroundImage = {
      backgroundImage: `url(img/bg1.png)`
    , backgroundSize: `cover`
    , backgroundPosition: `center center`
    , height: `calc(100% - 60px)`
    , padding: consts.SPACING
    }

    const sloganStyle = {
      position: `absolute`
    , bottom: `100px`
    , color: `white`
    , big: { fontSize: `2em` }
    , small: { fontSize: `1.2em`, paddingTop: consts.SPACING }
    }

    const slogan = {
      big: `It's all about the ultimate service experience, Jolera's relentless pursuit of your satisfaction`
    , small: `We take ownership of your I.T. challenges and vision, transforming them into turnkey solutions.`
    }

    return (
      <div style={ backgroundImage }>
        <div style={ style.max }>
          <div style={ sloganStyle }>
            <div style={ sloganStyle.big }>{ slogan.big }</div>
            <div style={ sloganStyle.small }>{ slogan.small }</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero