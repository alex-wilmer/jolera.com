import React from 'react'
import { Link } from 'react-router'
import style from '../style/style.jsx'

import LinksList from './links-list.jsx'

export default class Header {
  render () {
    const textColor = {
      color: `white`
    }

    return (
      <div style={ style.header }>
        <div style={ style.max }>
          <Link to='/' style={ textColor }>jolera.com</Link>
          <LinksList links={ this.props.links } wide={ this.props.wide } />
        </div>
      </div>
    )
  }
}
