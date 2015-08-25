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

import { Tabs, Tab, TabPanels, TabPanel } from '../tabs.jsx'
import LearnMore from '../learn-more.jsx'
import WhoWeAre from '../panels/who-we-are.jsx'
import WhatWeDo from '../panels/what-we-do.jsx'
import WhereWeAre from '../panels/where-we-are.jsx'

@Radium
export default class About extends React.Component {
  constructor (props) {
    super(props)

    this.state = { activeTab: 0 }
    this.selectTab = this.selectTab.bind(this)
  }

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
      tabs:
      [ { title: `Who We Are` }
      , { title: `What We Do` }
      , { title: `Where We Are`} ]
    }

    const padding = {
      padding: `20px`
    }

    return (
      <div style={ [greyBackground, this.props.footerMargin] }>
        <Banner text={ text.banner } image='img/bg1.png' wide={ this.props.wide } />

        <div style={ [max, padding] }>
          <div style={ [smallHeader, textCenter] }>{ text.main.header }</div>
          <p>{ text.main.paragraphs }</p>

          <hr style={ { margin: `20px 0` } }/>
        </div>

        <Tabs onSelect={ this.selectTab } activeTab={ this.state.activeTab }>
          { data.tabs.map((t, i) => {
            if (i) return <Tab key={ i } border={ true }>{ t }</Tab>
            else return <Tab key={ i }>{ t }</Tab>
          }) }
        </Tabs>

        <TabPanels activeTab={ this.state.activeTab }>
          <TabPanel>
            <WhoWeAre />
          </TabPanel>

          <TabPanel>
            <WhatWeDo />
          </TabPanel>

          <TabPanel>
            <WhereWeAre />
          </TabPanel>
        </TabPanels>

        <LearnMore />
      </div>
    )
  }

  selectTab (i) {
    this.setState({ activeTab: i })
  }
}
