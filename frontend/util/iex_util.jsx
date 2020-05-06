


// TESTING FETCHES
// TESTING FETCHES
// TESTING FETCHES
// TESTING FETCHES
// TESTING FETCHES
export const fetch5D = (sym) => (
  $.ajax({
    method: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${sym}/chart/5dm?token=${window.iexkkaccess}`,
  })
);

export const fetch1D = (sym) => (
  $.ajax({
    method: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${sym}/intraday-prices?token=${window.iexkkaccess}`,
  })
);

export const fetch1M = (sym) => (
  $.ajax({
    method: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${sym}/chart/1mm?token=${window.iexkkaccess}`,
  })
);

export const fetch3M = (sym) => (
  $.ajax({
    method: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${sym}/chart/3M?token=${window.iexkkaccess}`,
  })
);

export const fetch1Y = (sym) => (
  $.ajax({
    method: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${sym}/chart/1y?token=${window.iexkkaccess}`,
  })
);

export const fetch5Y = (sym) => (
  $.ajax({
    method: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${sym}/chart/5y?token=${window.iexkkaccess}`,
  })
);

export const fetchQuote = (sym) => (
  $.ajax({
    method: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${sym}/quote?token=${window.iexkkaccess}`,
  })
)

export const fetchInfo = (sym) => (
  $.ajax({
    method: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${sym}/company?token=${window.iexkkaccess}`,
  })
)

export const fetchNews = (sym) => (
  $.ajax({
    method: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${sym}/news?token=${window.iexkkaccess}`,
  })
)

export const fetchEarnings = (sym) => (
  $.ajax({
    method: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${sym}/earnings/5?token=${window.iexkkaccess}`,
  })
)

export const fetchAll = () => (
  $.ajax({
    method: 'GET',
    url: `https://sandbox.iexapis.com/stable/ref-data/symbols?token=${window.iexkkaccess}&filter=symbol`,
  }).then( data =>
    $.ajax({
      method: 'Post',
      url: `api/assets`,
      data: { data }
    })
  )
)

export const postAll = (data) => (
  $.ajax({
    method: 'Post',
    url: `api/assets`
  }
  )
);


// export const fetchBatch5D = (data) => {

//   var tickers = []

//   for (let i = 0; i < data.length -1; i++) {
//     if (!tickers.includes(data[i].ticker)) {
//       tickers.push(data[i].ticker)
//     }
//   }

//   var url = `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${tickers.join()}&types=quote&token=${window.iexkkaccess}`

//   return (
//   $.ajax({
//     method: 'GET',
//     url: `${url}`
//   }
//   )
//   )
// };



