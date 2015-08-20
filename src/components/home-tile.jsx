import React from 'react'

class HomeTile {
  render () {
    return (
      <div style={ this.props.style }>
        <img src={ this.props.src } />
        <span>{ this.props.text }</span>
      </div>
    )
  }
}

export default HomeTile
