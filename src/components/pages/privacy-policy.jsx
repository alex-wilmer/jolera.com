import React from 'react'
import Radium from 'radium'
import Banner from '../banner.jsx'
import LearnMore from '../learn-more.jsx'

import { SPACING } from '../../style/style-consts.jsx'
import { smallHeader, footerMargin, greyBackground, max, textCenter } from '../../style/style.jsx'

@Radium
export default class PrivacyPolicy extends React.Component {
  render () {
    const style = {
      wrapper: {
        textAlign: `center`
      , margin: `${ SPACING + 20 }px 0 ${ SPACING }`
      }
    , mainText: {
        padding: `40px 0px`
      }
    , contentPadding: {
        padding: this.props.wide ? `0px 60px` : `0px 15px`
      }
    }

    const text = {
      big: `Privacy Policy`
    }

    return (
      <div style={ [greyBackground, this.props.footerMargin] }>

        <Banner text={ text } image='img/bg1.png' wide={ this.props.wide } />

        <div style={ [style.contentPadding, max] }>
          <div style={ style.mainText }>
            <div>Jolera takes partnerships seriously. We work closely with industry innovators to achieve the critical mass...</div>
          </div>
        </div>

        <LearnMore />

      </div>
    )
  }
}
