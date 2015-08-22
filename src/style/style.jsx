import assign from 'object-assign'
import consts from './style-consts.jsx'
import mixins from './style-mixins.jsx'

const style = {
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

, button: {
    color: `white`
  , padding: `10px 20px`
  , margin: `20px 0`
  , display: `inline-block`
  }
}

export default style
