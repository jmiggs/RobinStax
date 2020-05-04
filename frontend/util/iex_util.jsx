


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




