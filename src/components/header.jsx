import React from 'react'
import { Link } from 'react-router'
import { header, max } from '../style/style.jsx'

import LinksList from './links-list.jsx'

export default class Header {
  render () {
    const padding = {
      padding: `12px 0`
    , display: `inline-block`
    }

    return (
      <div style={ header }>
        <div style={ max }>
          <Link to='/'><img style={ padding } src='img/nav-logo.png' /></Link>
          <LinksList links={ this.props.links } wide={ this.props.wide } />
        </div>
      </div>
    )
  }
}
