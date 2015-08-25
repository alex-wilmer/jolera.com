import React from 'react'
import Radium from 'radium'
import Banner from '../banner.jsx'
import LearnMore from '../learn-more.jsx'

@Radium
export default class TermsAndConditions extends React.Component {
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
      big: `Terms and Conditions`
    }

    return (
      <div style={ [greyBackground, this.props.footerMargin] }>

        <Banner text={ text } image='img/bg1.png' wide={ this.props.wide } />

        <div style={ [style.contentPadding, max] }>
          <div style={ style.mainText }>
            <div style={ [smallHeader, textCenter] }>Working together with others to fast track your success</div>
            <div>Jolera takes partnerships seriously. We work closely with infustry innovators to achieve the critical mass...</div>
          </div>
        </div>

        <LearnMore />

      </div>
    )
  }
}
