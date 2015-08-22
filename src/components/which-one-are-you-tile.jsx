import React from 'react'

class WhichOneAreYouTile {
  render () {
    return (
      <div style={ this.props.tileStyle }>
        <div style={ this.props.headerStyle }>{ this.props.header }</div>
        <div>{ this.props.description }</div>
        <div><a style={ this.props.buttonStyle }>LEARN MORE</a></div>
      </div>
    )
  }
}

export default WhichOneAreYouTile
