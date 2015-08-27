import React from 'react'
import Radium from 'radium'
import assign from 'object-assign'
import { BLUE, ORANGE, SPACING, HEADER_HEIGHT } from '../style/style-consts.jsx'
import { posY } from '../style/style-mixins.jsx'
import { Link } from 'react-router'

@Radium
export default class LinksList extends React.Component {
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
      , display: this.state.navOpen ? `block` : `inline-block`
      , height: `${ HEADER_HEIGHT }px`
      , ':hover': {
          color: `rgb(155, 254, 255)`
        }
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
    , navIcon: {
        position: `absolute`
      , top: 0
      , right: 0
      , padding: SPACING
      }
    }

    const wideLinks = this.props.links.map((link, i) => {
      if (i || this.state.navOpen) {
        style.links = assign({}, style.links, { paddingLeft: `20px` })
      }
      return (
        <a key={ i } href={ `#${ link.path }` } style={ style.links }>
          <span style={ [
            posY(35)
          , i === this.props.links.length -1 && { paddingRight: `20px` }
          ] }>{ link.name }</span>
        </a>
      )
    })

    const links = this.props.links.map((link, i) => {
      if (i || this.state.navOpen) {
        style.links = assign({}, style.links, { paddingLeft: `20px` })
      }
      return (
        <a key={ i + 1000 } href={ `#${ link.path }` } style={ style.links }>
          <span style={ [
            posY(35)
          , i === this.props.links.length -1 && { paddingRight: `20px` }
          ] }>{ link.name }</span>
        </a>
      )
    })

    const navIcon = (
      <a style={ style.navIcon } onClick={ this.toggleNav }>
        &nbsp;
        <i className='fa fa-navicon' />
      </a>
    )

    return (
      <span>
        <span style={ style.list }>
          { this.props.wide ? wideLinks : navIcon }
        </span>

        <div style={ style.overlay }>
          <a onClick={ this.toggleNav }>
            <i className='fa fa-close' style={ style.navIcon } />
          </a>

          <a href='#/' style={ style.links }>
            <span style={ [posY(35)] }>Home</span>
          </a>

          { links }
        </div>
      </span>
    )
  }
}
