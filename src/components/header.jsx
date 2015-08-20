import React from 'react'
import style from '../style/style.jsx'

import LinksList from './links-list.jsx'

class Header {
  render () {
    return (
      <div style={ style.header }>
        <div style={ style.max }>
          <span>jolera.com</span>
          <LinksList links={ this.props.links } wide={ this.props.wide } />
        </div>
      </div>
    )
  }
}

export default Header
