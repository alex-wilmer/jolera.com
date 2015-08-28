// Dependencies

import React from 'react'
import Radium from 'radium'
import assign from 'object-assign'

// Style

import { footer, max } from '../style/style.jsx'
import { FOOTER_HEIGHT, SPACING } from '../style/style-consts.jsx'

@Radium
export default class Footer extends React.Component {
  render () {
    const data = {
      mainLinks: [{
        header: `Home`
      , path: `#/`
      , subLinks: [`Awards`, `Mission`, `About Us`, `Contact`]
      }, {
        header: `Products`
      , path: `#/products-and-services`
      , subLinks:
      [ `Support I.T.`
      , `Monitor I.T.`
      , `Manage I.T.`
      , `Share I.T.`
      , `Block I.T.` ]
      }, {
        header: `Services`
      , subLinks: [`Professional`, `Helpdesk`, `Managed`, `Development`, `Cloud`]
      }, {
        header: `Solutions`
      , path: `#/`
      , subLinks:
      [ `Virtualization`
      , `The Virtual Office`
      , `Unified Communications`
      , `SharePoint Development`
      , `User Provisioning` ]
      }, {
        header: `Industries`
      , path: `#/partnerships`
      , subLinks: [`Non-Profit`, `Small Business`, `Mid Market`, `Enterprise`]
      }]

    , socialLinks: [
        { icon: <i className='fa fa-facebook' /> }
      , { icon: <i className='fa fa-twitter' /> }
      , { icon: <i className='fa fa-google-plus' /> }
      , { icon: <i className='fa fa-youtube' /> }
      , { icon: <i className='fa fa-rss' /> }
      ]

    , bottomLine: [
        { text: `Copyright © ${ new Date().getFullYear() } Jolera` }
      , { text: `Home`, link: `#/` }
      , { text: `Contact Us`, link: `#/contact-us` }
      , { text: `Site Map`, link: `#/site-map` }
      , { text: `Login`, link: `#/login` } // link to SP backend?
      , { text: `Privacy Policy`, link: `#/privacy-policy` }
      , { text: `Terms and Conditions`, link: `#/terms-and-conditions` }
      ]
    }

    const footerStyle = this.props.wide
      ? assign({}, footer, { height: `${ FOOTER_HEIGHT }px` })
      : assign({}, footer, { height: `${ FOOTER_HEIGHT * 1.5 }px` })

    const linkStyleWide = {
      float: `left`
    , width: `16%`
    }

    const linkStyle = {
      textAlign: `center`
    , fontSize: `1.8em`
    , lineHeight: 1.5
    }

    const socialLinksWrapperWide = {
      float: `right`
    }

    const socialLinksWrapper = {
      textAlign: `center`
    , margin: `${ SPACING }px 0`
    }

    const headerLinkStyle = {
      color: `white`
    }

    const subLinkStyle = {
      color: `grey`
    , display: `block`
    }

    const socialLinkStyleWide = {
      fontSize: `1.8em`
    , marginLeft: `12px`
    }

    const socialLinkStyleBase = {
      fontSize: `2em`
    }

    const bottomLineStyle = {
      color: `grey`
    , textAlign: `center`
    , padding: this.props.wide ? `40px` : `0 20px 20px`
    }

    const bottomLinkStyle = {
      color: `grey`
    }

    const mainLinks = data.mainLinks.map((l, i) => {
      return (
        <div key={ i } style={ this.props.wide ? linkStyleWide : linkStyle }>
          <a href={ l.path } style={ headerLinkStyle }>{ l.header }</a>
          { this.props.wide ? l.subLinks.map(sl => <a style={ subLinkStyle }>{ sl }</a>) : null }
        </div>
      )
    })

    const socialLinks = data.socialLinks.map((l, i) => {
      const socialLinkStyle = i
        ? assign({}, socialLinkStyleBase, {
            marginLeft: `8vw`
          })
        : socialLinkStyleBase

      return (
        <a key={ i } style={ this.props.wide ? socialLinkStyleWide : socialLinkStyle }>
          { l.icon }
        </a>
      )
    })

    const bottomLine = data.bottomLine.map((l, i) => {
      return (
        <span key={ i } style={ [this.props.wide || { fontSize: `1.3em`, lineHeight: `1.5em` }] }>
          <a href={ l.link } style={ bottomLinkStyle }>{ l.text }</a>
          { i !== data.bottomLine.length - 1 ? <span> | </span> : '' }
        </span>
      )
    })

    return (
      <div style={ footerStyle }>
        <div style={ max }>
          <div className='clearfix'>
            <div>{ mainLinks }</div>

            <div style={ this.props.wide ? socialLinksWrapperWide : socialLinksWrapper }>
              { socialLinks }
            </div>
          </div>

          <div style={ bottomLineStyle }>
            { bottomLine }
          </div>
        </div>
      </div>
    )
  }
}
