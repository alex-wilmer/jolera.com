import React from 'react'
import assign from 'object-assign'
import Radium from 'radium'
import { button, orange } from '../style/style.jsx'
import { H2 } from '../style/style-consts.jsx'
import { pos } from '../style/style-mixins.jsx'
import PATH from '../path.jsx'

@Radium
export default class LearnMore extends React.Component {
  render () {
    const background = {
      backgroundImage: `url(${ PATH }/img/dudes-back.jpg)`
    , backgroundSize: `cover`
    , backgroundPosition: `center center`
    , height: `350px`
    , textAlign: `center`
    , color: `white`
    }

    const header = {
      fontSize: `${ H2 }em`
    }

    return (
      <div style={ background }>
        <div style={ [pos(50, 70), { maxWidth: `500px` }] }>
          <div style={ header }>
            If you would like to learn more about our products and services
          </div>

          <a style={ [button, orange] }>CONTACT US</a>
        </div>
      </div>
    )
  }
}
