import React from 'react'
import Radium from 'radium'
import Banner from '../banner.jsx'
import { SPACING, GREY } from '../../style/style-consts.jsx'
import { smallHeader, footerMargin, greyBackground, smallSubHeader, max, contentPadding, textCenter } from '../../style/style.jsx'
import Carousel from './../carousel.jsx'
import LearnMore from '../learn-more.jsx'

@Radium
export default class Partnerships extends React.Component {
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
      big: `Partnerships`
    , small: `Striving to make a difference in our world`
    }

    return (
      <div style={ [greyBackground, this.props.footerMargin] }>

        <Banner text={ text } image='img/chairs.jpg' wide={ this.props.wide } />

        <div style={ [style.contentPadding, max] }>
          <div style={ style.mainText }>
            <div style={ [smallHeader, textCenter] }>Working together with others to fast track your success</div>
            <div>Jolera takes partnerships seriously. We work closely with infustry innovators to achieve the critical mass...</div>
          </div>

          <hr />
          <div style={ style.wrapper }>
            <div style={ smallHeader }>Technology Partners</div>
            <div style={ smallSubHeader }>Ultimate Experts</div>
            <div>With abundant real world experience and lists</div>
            <Carousel wide={ this.props.wide } />
          </div>

          <hr />
          <div style={ style.wrapper }>
            <div style={ smallHeader }>Strategic Partners</div>
            <div style={ smallSubHeader }>Custom Service</div>
            <div>"No man is an island."  Except the Isle of Man</div>
            <Carousel wide={ this.props.wide } />
          </div>

          <hr />
          <div style={ style.wrapper }>
            <div style={ smallHeader }>Distribution Partners</div>
            <div style={ smallSubHeader }>Industry Access</div>
            <div>Many of Jolera services can complement,</div>
            <Carousel wide={ this.props.wide } />
          </div>
        </div>

        <LearnMore />

      </div>
    )
  }
}
