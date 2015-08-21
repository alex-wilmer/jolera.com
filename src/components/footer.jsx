import React from 'react'
import style from '../style/style.jsx'
import consts from '../style/style-consts.jsx'

class Footer {
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
    }

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
    , margin: `${ consts.SPACING }px 0`
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

    const mainLinks = data.mainLinks.map(l => {
      return (
        <div style={ this.props.wide ? linkStyleWide : linkStyle }>
          <a style={ headerLinkStyle }>{ l.header }</a>
          { this.props.wide ? l.subLinks.map(sl => <a style={ subLinkStyle }>{ sl }</a>) : null }
        </div>
      )
    })

    const socialLinks = data.socialLinks.map((l, i) => {
      const socialLinkStyle = i
        ? Object.assign({}, socialLinkStyleBase, {
            marginLeft: `8vw`
          })
        : socialLinkStyleBase

      return (
        <a style={ this.props.wide ? socialLinkStyleWide : socialLinkStyle }>
          { l.icon }
        </a>
      )
    })

    return (
      <div style={ style.footer }>
        <div style={ style.max }>
          <div className='clearfix'>
            <div>{ mainLinks }</div>

            <div style={ this.props.wide ? socialLinksWrapperWide : socialLinksWrapper }>
              { socialLinks }
            </div>
          </div>

          <div>
            Bottom row
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
