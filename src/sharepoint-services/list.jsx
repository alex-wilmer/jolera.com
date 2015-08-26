import qwest from 'qwest'

const headers = { 'Accept': 'application/json;odata=verbose' }

const getItems = (listName, options, items) => {
  items = items || []

  const site = options && options.site && `/${ options.site }` || ``

  if (options) {
    var optionsString = Object.keys(options).map(key => {
      if (key !== 'site') {
         return `$${ key }=${ options[key] }`
      }
    }).join('&')
  }

  else optionsString = ''

  return qwest.get(
    `${ site }/_api/web/lists/getByTitle('${ listName }')/items?${ optionsString }`
  , null
  , { headers }
  )
    .then(response => {

      const data = JSON.parse(response.response)
      items = items.concat(data.d.results)

      // if (response.data.d.__next && !options.top) {
      //   return getItemsByUrl(response.data.d.__next, items)
      // }

      // else return items

      return items
    })
}

export { getItems }
