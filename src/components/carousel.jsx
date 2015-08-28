// Dependencies

import React from 'react'
import Radium from 'radium'
import Slider from 'react-slick'

// Style

import { posY } from '../style/style-mixins.jsx'

@Radium
export default class Carousel extends React.Component {
  render () {
    const settings = {
      autoplay : true
    , autoplaySpeed: 3000
    , dots: true
    , infinite: true
    , speed: 500
    , slidesToShow: this.props.wide ? 5 : 3
    , slidesToScroll: 1
    }

    const imgStyle = {
      maxWidth: `100px`
    , margin: `0 auto`
    }

    const linkStyle = {
      display: `inline-block`
    }

    return (
      <Slider { ...settings }>
        { this.props.data &&
          this.props.data.map(n => {
            return (
              <a style={ linkStyle }>
                <img style={ [imgStyle, posY(50)] } src={ n.img } />
              </a>
            )
          }) || <div>You forgot to put content!</div> }
      </Slider>
    )
  }
}
