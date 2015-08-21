import React from 'react'
import style from '../../style/style.jsx'
import consts from '../../style/style-consts.jsx'
import 'babel-core/polyfill'
// components
import HomeHero from '../home-hero.jsx'
import HomeTiles from '../home-tiles.jsx'
import WhichOneAreYou from '../which-one-are-you.jsx'
import OurServices from '../our-services.jsx'
import OurPartnerships from '../our-partnerships.jsx'
import LearnMore from '../learn-more.jsx'

class Home {
  render () {
    const hideWide = {
      display: this.props.wide ? `none` : `block`
    }

    const padMax = Object.assign({}, style.max, {
      padding: `${ consts.SPACING }px`
    })

    return (
      <div style={ this.props.footerMargin }>
        <HomeHero wide={ this.props.wide } />

        <div style={ style.greyBackground }>
          <div style={ padMax }>
            <div style={ hideWide }>
              <HomeTiles />
            </div>

            <WhichOneAreYou wide={ this.props.wide } />
            <OurServices wide={ this.props.wide } />
            <hr />
            <OurPartnerships />
          </div>
        </div>

        <LearnMore />
      </div>
    )
  }
}

export default Home
