import style from './style-consts.jsx'

export default {
  max: { maxWidth: `${style.MAX_WIDTH}px`, margin: `0 auto` }
, trueHeight: height => {
    return { height: `${style.HEADER_HEIGHT}px`, lineHeight: `${style.HEADER_HEIGHT}px` }
  }
}
