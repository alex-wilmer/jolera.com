import React from 'react'
import Radium from 'radium'
import Slider from 'react-slick'
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

    const data = [
      { img: `http://www.microsoft.com/indonesia/events/lightup/Images/Microsoft_Logo.png` }
    , { img: `http://www.microsoft.com/indonesia/events/lightup/Images/Microsoft_Logo.png` }
    , { img: `http://www.microsoft.com/indonesia/events/lightup/Images/Microsoft_Logo.png` }
    , { img: `http://www.microsoft.com/indonesia/events/lightup/Images/Microsoft_Logo.png` }
    ]

    const imgStyle = {
      maxWidth: `100px`
    , margin: `0 auto`
    }

    const linkStyle = {
      display: `inline-block`
    }

    return (
      <Slider { ...settings }>
        { data.map(n => {
            return (
              <a style={ linkStyle }>
                <img style={ [imgStyle, posY(50)] } src={ n.img } />
              </a>
            )
          }) }
      </Slider>
    )
  }
}
