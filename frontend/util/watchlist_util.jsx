

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

export const fetchWatchlistInfo = (tickers) => {
  var url = `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=aapl,fb,tsla&types=quote&token=${window.iexkkaccess}`
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
