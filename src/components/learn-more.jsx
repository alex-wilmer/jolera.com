import React from 'react'
import assign from 'object-assign'
import { max, button } from '../style/style.jsx'
import { H3, ORANGE } from '../style/style-consts.jsx'

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

    const buttonStyle = assign({}, button, { backgroundColor: ORANGE })

    const center = assign({}, max, {
      position: `relative`
    , top: `50%`
    , transform: `translateY(-50%)`
    , maxWidth: `500px`
    })

    return (
      <div style={ background }>
        <div style={ center }>
          <div style={ header }>
            If you would like to learn more about our products and services
          </div>

          <a style={ buttonStyle }>CONTACT US</a>
        </div>
      </div>
    )
  }
}

export default LearnMore
