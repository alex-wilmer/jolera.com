// Dependencies

import React from 'react'
import Radium from 'radium'

// Style

import { max, greyBackground } from '../../style/style.jsx'
import { H3 } from '../../style/style-consts.jsx'

// Components

import LearnMore from '../learn-more.jsx'

@Radium
export default class Search extends React.Component {
  render () {
    const headerStyle = {
      fontSize: `${ H3 }em`
    , color: `rgb(99, 99, 99)`
    , padding: `50px 0`
    }

    const inputStyle = {
      fontSize: `3em`
    , fontWeight: `300`
    , backgroundColor: `transparent`
    , border: `none`
    , outline: `none`
    }

    const minHeight = {
      minHeight: `500px`
    }

    return (
      <div style={ this.props.footerMargin }>
        <div style={ [greyBackground, minHeight] }>
          <div style={ [max, { padding: `20px`}] }>
            <div style={ headerStyle }>Search anytime by typing...</div>
            <input style={ inputStyle } autoFocus={ true } />
          </div>
        </div>

        <LearnMore />
      </div>
    )
  }
}
