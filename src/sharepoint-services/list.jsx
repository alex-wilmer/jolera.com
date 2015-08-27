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
      return items
    })
}

const insertItem = (listName, data, callback) => {
  SP.SOD.executeFunc(`sp.js`, `SP.ClientContext`, () => {
    const context = SP.ClientContext.get_current()
    const list = context.get_web().get_lists().getByTitle(listName)
    const item = list.addItem(new SP.ListItemCreationInformation())
    for (let prop in data) {
      item.set_item(prop, data[prop])
    }
    item.update()
    context.executeQueryAsync(
      () => callback(item.get_id())
    , () => callback('fail!')
    )
  })
}

export { getItems, insertItem }
