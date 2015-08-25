import React from 'react'
import assign from 'object-assign'
import Radium from 'radium'
import { button, orange } from '../style/style.jsx'
import { H3 } from '../style/style-consts.jsx'
import { pos } from '../style/style-mixins.jsx'

@Radium
export default class LearnMore extends React.Component {
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

    return (
      <div style={ background }>
        <div style={ [pos(50, 50), { maxWidth: `500px` }] }>
          <div style={ header }>
            If you would like to learn more about our products and services
          </div>

          <a style={ [button, orange] }>CONTACT US</a>
        </div>
      </div>
    )
  }
}
