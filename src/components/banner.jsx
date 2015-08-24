import React from 'react'
import { H2, HEADER_HEIGHT } from '../style/style-consts.jsx'

export default class Banner {
  render () {
    const style = {
      backgroundImage: `url(${ this.props.image })`
    , backgroundSize: `cover`
    , height: this.props.wide ? `380px` : `calc(100% - ${ HEADER_HEIGHT })`
    , textAlign: `center`
    , color: `white`
    }

    const center = {
      position: `relative`
    , top: `50%`
    , transform: `translateY(-50%)`
    }

    return (
      <div style={ style }>
        <div style={ center }>
          <div style={ { fontSize: `${ H2 }em` } }>{ this.props.text.big }</div>
          <div style={ { marginTop: `20px` } }>{ this.props.text.small }</div>
        </div>
      </div>
    )
  }
}
