import React from 'react'
import 'babel-core/polyfill'

import { Link } from 'react-router'

class LinksList {
  render () {
    const style = {
      list: { float: `right` }
    , links: {
        color: `white`
      , textDecoration: `none`
      , fontWeight: 300
      }
    }

    const links = this.props.links.map((link, i) => {
      if (i) style.links = Object.assign({}, style.links, { marginLeft: `20px` })
      return <Link to='/' style={ style.links }>{ link.name }</Link>
    })

    return <span style={ style.list }>{ links }</span>
  }
}

export default LinksList
