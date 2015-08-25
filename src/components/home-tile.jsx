import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router'
import { babyBlueGradient } from '../style/style.jsx'

@Radium
export default class HomeTile extends React.Component {
  render () {
    const iconStyle = {
      display: `block`
    , margin: `15px auto`
    }

    return (
      <a style={ [this.props.style, babyBlueGradient] }>
        <img style={ iconStyle } src={ this.props.img } />
        <span>{ this.props.text }</span>
      </a>
    )
  }
}
