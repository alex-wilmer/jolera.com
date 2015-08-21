import React from 'react'
import consts from '../style/style-consts.jsx'

class Banner {
  render () {
    const style = {
      backgroundImage: `url(${ this.props.image })`
    , backgroundSize: `cover`
    , height: `calc(100% - ${ consts.HEADER_HEIGHT })`
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
          <div>{ this.props.text.big }</div>
          <div>{ this.props.text.small }</div>
        </div>
      </div>
    )
  }
}

export default Banner
