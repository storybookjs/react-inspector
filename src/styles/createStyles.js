// http://requiremind.com/memoization-speed-up-your-javascript-performance// const memoize = (fn) => {
//   let cache = new Map()
//   const memoized = (...args) => {
//     const key = JSON.stringify(args)
//     if(cache.has(key)){
//       return cache.get(key)
//     }
//     const result = fn.apply(this, args)
//     cache.set(key, result)
//     return result
//   }
//   return memoized
// }
// export default memoize(createStyles)

// NOTE:
//  base
//  themes: {
//    default: {
//      ...
//    }
//  }

import * as themes from './themes'
import base from './base'

const styles = Object.keys(themes).reduce((styles, themeName) => {
  styles[themeName] = base(themes[themeName])
  return styles
}, {})

const createStyles = (key, theme) => {
  // console.debug(styles, theme, styles[theme])
  if(typeof theme === 'string') {
    // styles.hasOwnProperty(theme)
    return styles[theme][key]
  }
  else if(typeof theme === 'object') {
    throw new TypeError('custom theme not implemented')
  }
  // Default styles
  return styles['chromeLight'][key]
}

export default createStyles
