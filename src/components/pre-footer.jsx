import React from 'react'
import style from '../style/style.jsx'

class PreFooter {
  render () {
    const background = {
      backgroundImage: `url(img/bg1.png)`
    , backgroundSize: `cover`
    , height: `350px`
    }

    return (
      <div style={ background }>
        <div style={ style.max }>
          <div>If you would like to learn more about our products and services</div>
          <a>Contact Us</a>
        </div>
      </div>
    )
  }
}

export default PreFooter
