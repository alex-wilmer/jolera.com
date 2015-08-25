import React from 'react'
import Radium from 'radium'
import { babyBlueGradient, button, orange } from '../style/style.jsx'

@Radium
export default class WhichOneAreYouTile extends React.Component {
  render () {
    return (
      <div style={ [this.props.tileStyle, babyBlueGradient] }>
        <div style={ this.props.headerStyle }>{ this.props.header }</div>
        <div style={ this.props.descriptionStyle }>{ this.props.description }</div>
        <div><a style={ [button, orange] }>LEARN MORE</a></div>
      </div>
    )
  }
}
