/*

  The Home page! This is where all default routes redirect to.

*/

// Dependencies

import React from 'react'
import assign from 'object-assign'

// Components

import HomeHero from '../home-hero.jsx'
import HomeTiles from '../home-tiles.jsx'
import WhichOneAreYou from '../which-one-are-you.jsx'
import OurServices from '../our-services.jsx'
import OurPartnerships from '../our-partnerships.jsx'
import LearnMore from '../learn-more.jsx'

// Style

import { greyBackground, max } from '../../style/style.jsx'
import { SPACING } from '../../style/style-consts.jsx'

export default class Home {
  render () {
    const hideWide = {
      display: this.props.wide ? `none` : `block`
    }

    const padMax = assign({}, max, {
      padding: `${ SPACING }px`
    })

    return (
      <div style={ this.props.footerMargin }>
        <HomeHero wide={ this.props.wide } />

        <div style={ greyBackground }>
          <div style={ padMax }>
            <div style={ hideWide }>
              <HomeTiles />
            </div>

            <WhichOneAreYou wide={ this.props.wide } />
            <OurServices wide={ this.props.wide } />
            <hr />

            <OurPartnerships
              wide={ this.props.wide }
              partners={ this.props.partners } />
              
          </div>
        </div>

        <LearnMore />
      </div>
    )
  }
}
