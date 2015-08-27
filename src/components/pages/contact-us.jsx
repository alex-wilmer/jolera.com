import React from 'react'
import Radium from 'radium'
import { max, greyBackground, textCenter, smallHeader } from '../../style/style.jsx'
import ContactForm from '../contact-form.jsx'

import { Tabs, Tab, TabPanels, TabPanel } from '../tabs.jsx'
import LearnMore from '../learn-more.jsx'
import Sales from '../panels/sales.jsx'
import Services from '../panels/services.jsx'
import CustomerPortals from '../panels/customer-portals.jsx'

@Radium
export default class ContactUs extends React.Component {
  constructor (props) {
    super(props)

    this.state = { activeTab: 0 }
    this.selectTab = this.selectTab.bind(this)
  }

  render () {
    const mapStyle = {
      width: `100%`
    , height: `380px`
    }

    const padding = {
      padding: `20px`
    }

    const margin = {
      margin: `50px 0`
    }

    const office =  {
      width: `50%`
    , float: `right`
    , padding: `0px 60px`
    , textAlign: `left`
    }

    const data = {
      tabs:
      [ { title: `Sales` }
      , { title: `Services` }
      , { title: `Customer Portals`} ]

    , officeInfo: {
        branch: `Head Office`
      , location: `Toronto`
      , name: `Jolera Inc.`
      , address1: `777 Richmond St. West, Unit 2`
      , address2: `Toronto, Ontario, Canada`
      , postal: `M6J 0C2`
      , phone: `416.410.1011`
      }
    }

    const officeInfo = Object.keys(data.officeInfo).map(key => {
      return <div>{ data.officeInfo[key] }</div>
    })

    return (
      <div style={ [this.props.footerMargin, greyBackground] }>
        <iframe width="600" height="450" frameborder="0" style={ mapStyle } src="https://www.google.com/maps/embed/v1/place?q=777%20Richmond%20Street%20West%2C%20Toronto%2C%20ON%2C%20Canada&key=AIzaSyDJ9ME7by5XGppz_Il4XAvZ_3raMoig0Jg" allowfullscreen></iframe>

        <div style={ padding }>
          <div style={ max }>
            <div style={ textCenter }>
              <div style={ smallHeader }>
                We are only a CLICK - I.T™ away
              </div>

              <div>
                And remember, "Mighty oaks from little acorns grow!"
              </div>

              <hr style={ margin } />

              <div className='clearfix'>
                <ContactForm wide={ this.props.wide } />
                <div style={ office }>{ officeInfo }</div>
              </div>
            </div>
          </div>
        </div>

        <Tabs onSelect={ this.selectTab } activeTab={ this.state.activeTab }>
          { data.tabs.map((t, i) => {
            if (i) return <Tab key={ i } border={ true }>{ t }</Tab>
            else return <Tab key={ i }>{ t }</Tab>
          }) }
        </Tabs>

        <TabPanels activeTab={ this.state.activeTab }>
          <TabPanel>
            <Sales />
          </TabPanel>

          <TabPanel>
            <Services />
          </TabPanel>

          <TabPanel>
            <CustomerPortals />
          </TabPanel>
        </TabPanels>
      </div>
    )
  }

  selectTab (i) {
    this.setState({ activeTab: i })
  }
}
