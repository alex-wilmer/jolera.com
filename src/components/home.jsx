import React from 'react'
import style from '../style/style.jsx'
import consts from '../style/style-consts.jsx'
import 'babel-core/polyfill'
// components
import Hero from './hero.jsx'
import HomeTiles from './home-tiles.jsx'
import WhichOneAreYou from './which-one-are-you.jsx'
import OurServices from './our-services.jsx'
import OurPartnerships from './our-partnerships.jsx'
import PreFooter from './pre-footer.jsx'

class Home {
  render () {
    const marginBottom = {
      marginBottom: `300px`
    }

    const grey = {
      background: consts.GREY
    }

    return (
      <div style={ marginBottom }>
        <Hero />

        <div style={ grey }>
          <div style={ style.max }>
            <HomeTiles />
            <WhichOneAreYou />
            <OurServices />
            <hr />
            <OurPartnerships />
          </div>
        </div>

        <PreFooter />
      </div>
    )
  }
}

export default Home
