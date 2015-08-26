import React from 'react'
import Radium from 'radium'
import Banner from '../banner.jsx'
import { greyBackground, max, smallHeader, textCenter } from '../../style/style.jsx'

import { Tabs, Tab, TabPanels, TabPanel } from '../tabs.jsx'
import ManagedServices from '../panels/managed-services.jsx'
import CloudServices from '../panels/cloud-services.jsx'
import ProfessionalServices from '../panels/professional-services.jsx'

@Radium
export default class ProductsAndServices extends React.Component {
  constructor (props) {
    super(props)

    this.state = { activeTab: 0 }
    this.selectTab = this.selectTab.bind(this)
  }

  render () {
    const data = {
      banner: {
        big: `Proucts and Services`
      , small: `Deilvering the promise`
      }
    , main: {
        header: `A collection of Ultimate I.T. solutions and services`
      , paragraphs:
        `Jolera has differentiated itself from other I.T. service providers by
        its product and service offerings. Realizing that every organization is
        unique and every customer's expectations differ, we have worked dilligently
        to present customers with an a la carte product and service offering that can
        be custom tailored. Our customers range in size from 5 to 37,000 users,
        easily attesting to the success of our winning formula.

        Our portfolio can be combined to deliver an ultimate I.T. services platform
        or can be used as an extension to your I.T. requirements and business strategy.
        Be confident in knowing that regardless of what product, service or
        department, you are engaging our key traits of performance, reliability,
        accountability and value are ingrained.`
      }
    }

    return (
      <div style={ [this.props.footerMargin, greyBackground] }>
        <Banner text={ data.banner } image='img/servers.jpg' wide={ this.props.wide } />

        <div style={ [max, { padding: `20px` }] }>
          <div style={ [smallHeader, textCenter] }>{ data.main.header }</div>
          <p>{ data.main.paragraphs }</p>
        </div>

        <Tabs activeTab={ this.state.activeTab } onSelect={ this.selectTab }>
          <Tab>
            <img style={ { marginBottom: `20px` } } src='img/icons/fork-knife-medium.png' />
            <div>Managed Services</div>
          </Tab>

          <Tab>
            <img style={ { marginBottom: `20px` } } src='img/icons/cloud-medium.png' />
            <div>Cloud Services</div>
          </Tab>

          <Tab>
            <img style={ { marginBottom: `20px` } } src='img/icons/headset-medium.png' />
            <div>Professional Services</div>
          </Tab>
        </Tabs>

        <TabPanels activeTab={ this.state.activeTab }>
          <TabPanel><ManagedServices /></TabPanel>
          <TabPanel><CloudServices /></TabPanel>
          <TabPanel><ProfessionalServices /></TabPanel>
        </TabPanels>
      </div>
    )
  }

  selectTab (i) {
    this.setState({ activeTab: i })
  }
}
