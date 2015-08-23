import React from 'react'
import { Link } from 'react-router'

export default class HomeTile {
  render () {
    return (
      <Link to='/' style={ this.props.style }>
        <img src={ this.props.src } />
        <span>{ this.props.text }</span>
      </Link>
    )
  }
}
