export default {
  trueHeight: height => {
    return {
      height: `${ height }px`
    , lineHeight: `${ height }px`
    }
  }

, pos: (x, y, absolute) => {
    return {
      position: absolute ? `absolute` : `relative`
    , top: `${ y }%`
    , left: `${ x }%`
    , transform: `translate(-${ x }%, -${ y }%)`
    }
  }

, posY: (y, absolute) => {
    return {
      position: absolute ? `absolute` : `relative`
    , top: `${ y }%`
    , transform: `translateY(-${ y }%)`
    }
  }
}
