

export const createWatchlist = (data) => (
  $.ajax({
    method: 'Post',
    url: `api/watchlists`,
    data: { data }
  })
);

export const fetchWatchlists = () => (
  $.ajax({
    method: 'Get',
    url: `api/watchlists`,
  })
);

export const fetchWatchlist = (id) => (
  $.ajax({
    method: 'Get',
    url: `api/watchlists/${id}`,
  })
);

export const fetchWatchlistInfo = (wlInfo) => {

 
  let wlItems = wlInfo.wlItems;
  let toFetch = [];

  for (let i = 0; i < wlItems.length; i++) {
    if (!toFetch.includes(wlItems[i].ticker)) {
      toFetch.push(wlItems[i].ticker)
    }
  }

  var url = `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${toFetch.join()}&types=quote&token=${window.iexkkaccess}`
  return(
  $.ajax({
    method: 'GET',
    url: `${url}`
  }))
}

export const postWatchlistItems = (wls, sym) => {
  
  return(
    $.ajax({
      method: 'Post',
      url: `api/watchlistitems`,
      data: { wls, sym }
  }))
}

export const deleteWatchlist = (id) => {

  return(
    $.ajax({
      method: 'Delete',
      url: `api/watchlists/${id}`,
  }))
}
export const deleteWatchlistItem = (sym, listId) => {

  return(
    $.ajax({
      method: 'Delete',
      url: `api/watchlistitems/${sym}?listid=${listId}`,
      listId: { listId }
  }))
}