// Dependencies

import React from 'react'
import assign from 'object-assign'

// Style

import { footer, max } from '../style/style.jsx'
import { FOOTER_HEIGHT, SPACING } from '../style/style-consts.jsx'

export default class Footer {
  render () {
    const data = {
      mainLinks: [{
        header: `Home`
      , subLinks: [`Awards`, `Mission`, `About Us`, `Contact`]
      }, {
        header: `Products`
      , subLinks: [`Awards`, `Mission`, `Contact`, `Contact`]
      }, {
        header: `Services`
      , subLinks: [`Awards`, `Mission`, `Contact`, `Contact`]
      }, {
        header: `Solutions`
      , subLinks: [`Awards`, `Mission`, `Contact`, `Contact`]
      }, {
        header: `Industries`
      , subLinks: [`Awards`, `Mission`, `Contact`, `Contact`]
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
      , { text: `Home` }
      , { text: `Contact Us` }
      , { text: `Site Map` }
      , { text: `Login` }
      , { text: `Privacy Policy` }
      , { text: `Term and Conditions` }
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
    , padding: `50px 10px`
    }

    const mainLinks = data.mainLinks.map((l, i) => {
      return (
        <div key={ i } style={ this.props.wide ? linkStyleWide : linkStyle }>
          <a style={ headerLinkStyle }>{ l.header }</a>
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
        <span>
          <a key={ i }>{ l.text }</a>
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
