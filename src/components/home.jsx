import React from 'react'
import style from '../style/style.jsx'
import 'babel-core/polyfill'

class Home {
  render () {
    const backgroundImage = {
      backgroundImage: `url(img/bg1.png)`
    , backgroundSize: `cover`
    , backgroundPosition: `center center`
    , height: `100%`
    , marginBottom: `300px`
    }

    const slogan = {
      position: `absolute`
    , bottom: `100px`
    , fontSize: `2em`
    , color: `white`
    }

    style.max = Object.assign({}, style.max, { height: `100%` })

    return (
      <div style={ backgroundImage }>
        <div style={ style.max }>
          <div style={ slogan }>
            It's all about the ultimate service experience,
            Jolera's relentless pursuit of your satisfation
          </div>
        </div>
      </div>
    )
  }
}

export default Home
