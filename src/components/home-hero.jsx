import React from 'react'
import assign from 'object-assign'
import { SPACING } from '../style/style-consts.jsx'
import { max } from '../style/style.jsx'
import HomeTiles from './home-tiles.jsx'

class HomeHero {
  render () {
    const backgroundImage = {
      backgroundImage: `url(img/bg1.png)`
    , backgroundSize: `cover`
    , backgroundPosition: `center center`
    , height: `calc(${ this.props.wide ? 48 : 100 }% - 60px)`
    , padding: SPACING
    , position: `relative`
    }

    const sloganStyle = {
      wrapper: {
        position: `absolute`
      , bottom: `25px`
      , color: `white`
      , width: this.props.wide ? `50%` : `100%`
      , paddingRight: SPACING
      }
    , big: { fontSize: `2em` }
    , small: { fontSize: `1.2em`, paddingTop: SPACING }
    }

    const sloganWrapper = this.props.wide
      ? assign({}, sloganStyle.wrapper, {
          maxWidth: `550px`
        })
      : sloganStyle.wrapper

    const contentWrapper = assign({}, max, {
      position: `relative`
    , height: `100%`
    })

    const slogan = {
      big: `It's all about the ultimate service experience, Jolera's relentless pursuit of your satisfaction`
    , small: `We take ownership of your I.T. challenges and vision, transforming them into turnkey solutions.`
    }

    const showWide = {
      display: this.props.wide ? `block` : `none`
    , position: `relative`
    , height: `100%`
    }

    return (
      <div style={ backgroundImage }>
        <div style={ contentWrapper }>
          <div style={ sloganWrapper }>
            <div style={ sloganStyle.big }>{ slogan.big }</div>
            <div style={ sloganStyle.small }>{ slogan.small }</div>
          </div>

          <div style={ showWide }>
            <HomeTiles wide={ this.props.wide } />
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHero
