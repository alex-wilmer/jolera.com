import React from 'react'
import style from '../style/style.jsx'
import consts from '../style/style-consts.jsx'
import 'babel-core/polyfill'

class Home {
  render () {
    const backgroundImage = {
      backgroundImage: `url(img/bg1.png)`
    , backgroundSize: `cover`
    , backgroundPosition: `center center`
    , height: `calc(100% - 60px)`
    }

    const marginBottom = {
      marginBottom: `300px`
    }

    const slogan = {
      position: `absolute`
    , bottom: `100px`
    , fontSize: `2em`
    , color: `white`
    }

    const grey = {
      background: consts.GREY
    }

    return (
      <div style={ marginBottom }>
        <div style={ backgroundImage }>
          <div style={ style.max }>
            <div style={ slogan }>
              It's all about the ultimate service experience,
              Jolera's relentless pursuit of your satisfation
            </div>
          </div>
        </div>

        <div style={ grey }>
          <div style={ style.max }>
            test stuff
          </div>
        </div>
      </div>
    )
  }
}

export default Home
