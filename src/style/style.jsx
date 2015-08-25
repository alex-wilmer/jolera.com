import assign from 'object-assign'
import consts from './style-consts.jsx'
import mixins from './style-mixins.jsx'

export default {
  max: {
    maxWidth: `${ consts.MAX_WIDTH }px`
  , margin: `0 auto`
  }

, header: assign({}, {
      backgroundColor: consts.BLUE
    , color: `white`
    , padding: `0 ${ consts.SPACING }px`
    }
  , mixins.trueHeight(consts.HEADER_HEIGHT))

, footer: {
    position: `fixed`
  , bottom: `0`
  , width: `100%`
  , height: `${ consts.FOOTER_HEIGHT }px`
  , padding: `${ consts.SPACING }px`
  , backgroundColor: consts.BLACK
  , color: `white`
  , zIndex: -1
  }

, footerMargin: {
    marginBottom: `${ consts.FOOTER_HEIGHT }px`
  }

, blueBackground: {
    backgroundColor: consts.BLUE
  }

, greyBackground: {
    backgroundColor: consts.GREY
  }

, textCenter: {
    textAlign: `center`
  }

, smallHeader: {
    fontSize: `${ consts.H4 }em`
  , color: `${ consts.BLUE }`
  , margin: `${ consts.SPACING }px 0 ${ consts.SPACING }`
  }

, smallSubHeader: {
    fontSize: `${ consts.H4 }em`
  , fontStyle: `italic`
  , margin: `${ consts.SPACING }px 0 ${ consts.SPACING }`
  }

, button: {
    color: `white`
  , padding: `${ consts.SPACING / 2 }px ${ consts.SPACING }px`
  , margin: `${ consts.SPACING * 2 }px 0`
  , display: `inline-block`
  , transition: `background-color 0.3s ease`
  }

, orange: {
    backgroundColor: consts.ORANGE
  , ':hover': {
      backgroundColor: `rgb(185, 97, 48)`
    }
  }

, babyBlue: {
    backgroundColor: consts.BABY_BLUE
  , ':hover': {
      backgroundColor: `#1C8DA7`
    }
  }

, babyBlueGradient: {
    background: `linear-gradient(to bottom, rgba(0,183,234,1) 0%,rgba(0,158,195,1) 100%)`
  }
}
