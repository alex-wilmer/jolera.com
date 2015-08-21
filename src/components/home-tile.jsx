import React from 'react'
import { Link } from 'react-router'

class HomeTile {
  render () {
    return (
      <Link to={ this.props.link } style={ this.props.style }>
        <img src={ this.props.src } />
        <span>{ this.props.text }</span>
      </Link>
    )
  }
}

export default HomeTile
