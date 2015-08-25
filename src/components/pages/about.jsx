import React from 'react'
import Radium from 'radium'
import assign from 'object-assign'
import Banner from '../banner.jsx'
import {
  blueBackground
, greyBackground
, smallHeader
, max
, textCenter } from '../../style/style.jsx'
import { BABY_BLUE } from '../../style/style-consts.jsx'

import { Tabs, Tab } from '../tabs.jsx'
import LearnMore from '../learn-more.jsx'

@Radium
export default class About extends React.Component {
  render () {
    const text = {
      banner: {
        big: `About Us`
      , small: `Lorem ipsum..`
      }
    , main: {
        header: `Digging deep to assure your complete satisfaction`
      , paragraphs:
          `Founded in 2001, Jolera has grown to become the most caring and value driven Information Technology service provider in
          Canada. Through its continued investment in technology and dedicated staff of 90+ associates, Jolera is proud to have been
          recognized in PROFIT 100 Canada's Fastest Growing Companies. Additionally, we've worked long and hard to earn Bronze,
          Silver and Gold awards from the Canadian Dealer News Network recognizing our continued innovation and industry high
          satisfaction ratings.

          Our Ultimate Customer Experience is built on a trust and performance. We understand your concerns, we understand your
          reservations. Jolera will consistently deliver and amaze our customers and partners alike. Building on this strong

          foundation we want to become a key part of your I.T. initiatives.

          Our clients range from small service groups to large multi-national corporations.`
      }
    }

    const data = {
      tabs: [`Who We Are`, `What We Do`, `Where We Are`]
    }

    const padding = {
      padding: `20px`
    }

    const minHeight = {
      minHeight: `300px`
    , paddingTop: `80px`
    , position: `relative`
    , top: `-80px`
    }

    const babyBlueHeader = assign({}, smallHeader)
    babyBlueHeader.color = BABY_BLUE

    return (
      <div style={ [greyBackground, this.props.footerMargin] }>
        <Banner text={ text.banner } image='img/bg1.png' wide={ this.props.wide } />

        <div style={ [max, padding] }>
          <div style={ [smallHeader, textCenter] }>{ text.main.header }</div>
          <p>{ text.main.paragraphs }</p>

          <hr style={ { margin: `20px 0` } }/>

          <Tabs>
            { data.tabs.map((t, i) => {
              if (i) return <Tab border={ true }>{ t }</Tab>
              else return <Tab>{ t }</Tab>
            }) }
          </Tabs>
        </div>

        <div style={ [blueBackground, minHeight] }>
          <div style={ [max, textCenter] }>
            <div style={ babyBlueHeader }>Passion, Trust, Success, Loyalty</div>
          </div>
        </div>

        <LearnMore />
      </div>
    )
  }
}
