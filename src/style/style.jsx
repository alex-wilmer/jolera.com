import 'babel-core/polyfill'
import consts from './style-consts.jsx'
import mixins from './style-mixins.jsx'

const style = {
  max: {
    maxWidth: `${ consts.MAX_WIDTH }px`
  , margin: `0 auto`
  }

, header: Object.assign({}, {
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
}

export default style
