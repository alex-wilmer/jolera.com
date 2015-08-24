import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router'
import { babyBlueGradient } from '../style/style.jsx'

@Radium
export default class HomeTile extends React.Component {
  render () {
    return (
      <a style={ [this.props.style, babyBlueGradient] }>
        <img src={ this.props.src } />
        <span>{ this.props.text }</span>
      </a>
    )
  }
}
