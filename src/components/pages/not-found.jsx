import React from 'react'
import Radium from 'radium'
import { footerMargin, greyBackground, textCenter } from '../../style/style.jsx'
import { posY } from '../../style/style-mixins.jsx'
import { H2 } from '../../style/style-consts.jsx'

@Radium
export default class NotFound extends React.Component {
  render () {
    const fullHeight = {
      height: `100%`
    }

    const big = {
      fontSize: `${ H2 }em`
    }

    return (
      <div style={ [greyBackground, this.props.footerMargin, fullHeight] }>
        <div style={ [posY(50), textCenter, big] }>
          Sorry, we can't find this page!
        </div>
      </div>
    )
  }
}
