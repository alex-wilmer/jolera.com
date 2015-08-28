// Dependencies

import React from 'react'
import Radium from 'radium'

// Style

import { SPACING } from '../../style/style-consts.jsx'
import {
  accordionContentBaseStyle
, smallHeader
, footerMargin
, greyBackground
, max
, textCenter
} from '../../style/style.jsx'

// SharePoint Services

import { getItems } from '../../sharepoint-services/list.jsx'

// Components

import Banner from '../banner.jsx'
import LearnMore from '../learn-more.jsx'

@Radium
export default class Careers extends React.Component {
  constructor (props) {
    super(props)

    this.state = { activeItemIndexes: [], careers: [] }
    this.selectItem = this.selectItem.bind(this)

    getItems(`Careers`, { site: _spPageContextInfo.webTitle })
      .then(data => this.setState({ careers: data }))
  }

  selectItem (i) {
    const arr = this.state.activeItemIndexes.slice()
    const index = arr.indexOf(i)
    if (index > -1) {
      this.setState({ activeItemIndexes:
        [ ...arr.slice(0, index), ...arr.slice(index + 1, arr.length)] })
    }
    else {
      arr.push(i)
      this.setState({ activeItemIndexes: arr })
    }
  }

  render () {
    const style = {
      wrapper: {
        textAlign: `center`
      , margin: `${ SPACING + 20 }px 0 ${ SPACING }`
      }
    , mainText: {
        padding: `40px 0px`
      }
    , contentPadding: {
        padding: this.props.wide ? `0px 60px` : `0px 15px`
      }
    }

    const text = {
      big: `Careers`
    , small: `Human Resources to humanize I.T.`
    }

    const accordionHeight = {
      open: { maxHeight: `1500px` }
    , closed: { maxHeight: `0px` }
    }

    const accordionItems = this.state.careers.map((m, i) => {
      return (
        <div key={ i }>
          { i ? <hr /> : `` }

          <a className='clearfix' onClick={ this.selectItem.bind(this, i) }>
            <div style={ smallHeader }>{ m.Title }</div>
            <i style={ [
              { float: `right`, transition: `transform 0.3s ease` }
            , this.state.activeItemIndexes.indexOf(i) > -1
              ? { transform: `rotate(180deg)` }
              : { transform: `rotate(0deg)` }
            ] } className='fa fa-chevron-down' />
          </a>

          <div style={ [
            accordionContentBaseStyle
          , this.state.activeItemIndexes.indexOf(i) > -1
              ? accordionHeight.open : accordionHeight.closed
          ] }>
            <div dangerouslySetInnerHTML={{ __html: m.Description }}></div>
          </div>
        </div>
      )
    })

    return (
      <div style={ [greyBackground, this.props.footerMargin] }>

        <Banner text={ text } image='img/bg1.png' wide={ this.props.wide } />

        <div style={ [style.contentPadding, max] }>
          <div style={ style.mainText }>
            <div>
              <p>
                Jolera is a full spectrum, enterprise-wide technology solutions
                provider that has been in the I.T. business since 2001.  We deliver
                end-to-end solutions including:
              </p>

              <ul>
                <li>Application innovations</li>
                <li>Social integration</li>
                <li>Hardware and software sales and installation</li>
                <li>Managed services</li>
                <li>Portal development</li>
                <li>Computer security</li>
              </ul>

              <p>
                Professional consulting services are offered to clients across
                Canada, USA, Mexico, and the Caribbean
              </p>

              <ul>
                <li>
                  We offer our staff career growth, great work / life balance,
                  a full benefits program, vision and dental care
                </li>

                <li>
                  Fully reimbursable training-programs assure team members remain
                  leaders in technology
                </li>

                <li>
                  Diverse social programs encourage our teams to work and
                  socialize together
                </li>
              </ul>

              <p>
                We understand the diversity of our staff fosters a unique creative
                environment whose ultimate beneficiary is our clientele. At Jolera
                we respect you, celebrate your heritage, and want you to bring all
                your strengths to help us provide the foremost IT experience in Canada.
              </p>

              <strong>Jolera is proud to be an equal opportunity employer!</strong>
            </div>

            <hr />
          </div>
        </div>

        <div style={ [max, { padding: `20px` }] }>
          { accordionItems }
        </div>

        <LearnMore />
      </div>
    )
  }
}
