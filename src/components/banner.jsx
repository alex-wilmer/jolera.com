import React from 'react'
import { H2, H4, HEADER_HEIGHT } from '../style/style-consts.jsx'

export default class Banner {
  render () {
    const style = {
      backgroundImage: `url(${ this.props.image })`
    , backgroundSize: `cover`
    , backgroundPosition: `center center`
    , height: this.props.wide ? `380px` : `calc(100% - ${ HEADER_HEIGHT }px)`
    , textAlign: `center`
    , color: `white`
    }

    const center = {
      position: `relative`
    , top: `50%`
    , transform: `translateY(-50%)`
    }

    const smallText = {
      marginTop: `20px`
    , fontSize: `${ H4 }em`
    }

    return (
      <div style={ style }>
        <div style={ center }>
          <div style={ { fontSize: `${ H2 }em` } }>{ this.props.text.big }</div>
          <div style={ smallText }>{ this.props.text.small }</div>
        </div>
      </div>
    )
  }
}
