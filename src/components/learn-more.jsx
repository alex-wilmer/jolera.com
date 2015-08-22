import React from 'react'
import assign from 'object-assign'
import { max } from '../style/style.jsx'
import { H3 } from '../style/style-consts.jsx'

class LearnMore {
  render () {
    const background = {
      backgroundImage: `url(img/bg1.png)`
    , backgroundSize: `cover`
    , height: `350px`
    , textAlign: `center`
    , color: `white`
    }

    const header = {
      fontSize: `${ H3 }em`
    }

    const center = assign({}, max, {
      position: `relative`
    , top: `50%`
    , transform: `translateY(-50%)`
    })

    center.maxWidth = `500px`

    return (
      <div style={ background }>
        <div style={ center }>
          <div style={ header }>
            If you would like to learn more about our products and services
          </div>

          <a>Contact Us</a>
        </div>
      </div>
    )
  }
}

export default LearnMore
