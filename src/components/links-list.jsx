import React from 'react'
import assign from 'object-assign'
import { BLUE, SPACING } from '../style/style-consts.jsx'

import { Link } from 'react-router'

class LinksList extends React.Component {
  constructor (props) {
    super(props)

    this.state = { navOpen: false }
    this.toggleNav = this.toggleNav.bind(this)
  }

  componentWillReceiveProps () {
    this.setState({ navOpen: false })
  }

  toggleNav () {
    const navOpen = !this.state.navOpen
    this.setState({ navOpen })
  }

  render () {
    const style = {
      list: { float: `right` }
    , links: {
        color: `white`
      , textDecoration: `none`
      , fontWeight: 300
      , display: this.state.navOpen ? `block` : `inline`
      }
    , overlay: {
        position: `fixed`
      , top: 0
      , left: 0
      , width: `100%`
      , height: `100%`
      , backgroundColor: BLUE
      , zIndex: this.state.navOpen ? 1 : -1
      , opacity: this.state.navOpen ? 1 : 0
      , transition: `opacity 0.3s ease`
      }
    , close: {
        float: `right`
      , fontSize: `1.5em`
      , padding: SPACING
      }
    }

    const links = this.props.links.map((link, i) => {
      if (i || this.state.navOpen) {
        style.links = assign({}, style.links, { paddingLeft: `20px` })
      }
      return <Link to={ link.path } style={ style.links }>{ link.name }</Link>
    })

    const navIcon = (
      <a onClick={ this.toggleNav }>&nbsp;<i className='fa fa-navicon' /></a>
    )

    return (
      <span>
        <span style={ style.list }>{ this.props.wide ? links : navIcon }</span>
        <div style={ style.overlay }>
          <a onClick={ this.toggleNav }>
            <i className='fa fa-close' style={ style.close } />
          </a>
          <Link to='/' style={ style.links }>jolera.com</Link>
          { links }
        </div>
      </span>
    )
  }
}

export default LinksList
