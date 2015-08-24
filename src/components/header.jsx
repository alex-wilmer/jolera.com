import React from 'react'
import { Link } from 'react-router'
import { header, max } from '../style/style.jsx'

import LinksList from './links-list.jsx'

export default class Header {
  render () {
    const textColor = {
      color: `white`
    }

    return (
      <div style={ header }>
        <div style={ max }>
          <Link to='/' style={ textColor }>jolera.com</Link>
          <LinksList links={ this.props.links } wide={ this.props.wide } />
        </div>
      </div>
    )
  }
}
