export const fetchUserStocks = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  }
  )
);

export const fetchBatch5D = (data) => {

  var tickers = []

  for (let i = 0; i < data.length -1; i++) {
    if (!tickers.includes(data[i].ticker)) {
      tickers.push(data[i].ticker)
    }
  }

  var url = `https://sandbox.iexapis.com/stable/stock/market/batch?types=chart&symbols=${tickers.join()}&range=5dm&filter=date,label,close&token=${window.iexkkaccess}`

  return (
  $.ajax({
    method: 'GET',
    url: `${url}`
  }
  )
  )
};