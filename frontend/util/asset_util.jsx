export const fetchUserStocks = (id) => {

  return(
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  }
  ))
};

export const fetchBatch5D = (data) => {

  var tickers = []
  console.log(data)

  for (let i = 0; i < data.length; i++) {
    if (!tickers.includes(data[i].ticker)) {
      tickers.push(data[i].ticker)
    }
  }

  console.log(tickers)
  
  var url = `https://sandbox.iexapis.com/stable/stock/market/batch?types=chart&symbols=${tickers.join()}&range=5dm&filter=date,label,close&token=${window.iexkkaccess}`

  return (
  $.ajax({
    method: 'GET',
    url: `${url}`
  }))
};





export const fetch5DBatch = (data, range) => {
  
  var tickers = []

  for (let i = 0; i < data.length; i++) {
    if (!tickers.includes(data[i])) {
      tickers.push(data[i])
    }
  }
  var url = `https://sandbox.iexapis.com/stable/stock/market/batch?types=chart&symbols=${tickers.join()}&range=5dm&filter=date,label,close&token=${window.iexkkaccess}`
 
  return (
  $.ajax({
    method: 'GET',
    url: `${url}`
  }))
};

export const fetch1DBatch = (data, range) => {
  
  var tickers = []

  for (let i = 0; i < data.length; i++) {
    if (!tickers.includes(data[i])) {
      tickers.push(data[i])
    }
  }
  var url = `https://sandbox.iexapis.com/stable/stock/market/batch?types=chart&symbols=${tickers.join()}&range=1d&filter=date,label,close&token=${window.iexkkaccess}`
 
  return (
  $.ajax({
    method: 'GET',
    url: `${url}`
  }))
};

export const fetch1MBatch = (data, range) => {
  
  var tickers = []

  for (let i = 0; i < data.length; i++) {
    if (!tickers.includes(data[i])) {
      tickers.push(data[i])
    }
  }
  var url = `https://sandbox.iexapis.com/stable/stock/market/batch?types=chart&symbols=${tickers.join()}&range=1m&filter=date,label,close&token=${window.iexkkaccess}`
 
  return (
  $.ajax({
    method: 'GET',
    url: `${url}`
  }))
};

export const fetch3MBatch = (data, range) => {
  
  var tickers = []

  for (let i = 0; i < data.length; i++) {
    if (!tickers.includes(data[i])) {
      tickers.push(data[i])
    }
  }
  var url = `https://sandbox.iexapis.com/stable/stock/market/batch?types=chart&symbols=${tickers.join()}&range=3m&filter=date,label,close&token=${window.iexkkaccess}`
 
  return (
  $.ajax({
    method: 'GET',
    url: `${url}`
  }))
};

export const fetch1YBatch = (data, range) => {
  
  var tickers = []

  for (let i = 0; i < data.length; i++) {
    if (!tickers.includes(data[i])) {
      tickers.push(data[i])
    }
  }
  var url = `https://sandbox.iexapis.com/stable/stock/market/batch?types=chart&symbols=${tickers.join()}&range=1y&filter=date,label,close&token=${window.iexkkaccess}`
 
  return (
  $.ajax({
    method: 'GET',
    url: `${url}`
  }))
};

export const fetch5YBatch = (data, range) => {
  
  var tickers = []

  for (let i = 0; i < data.length; i++) {
    if (!tickers.includes(data[i])) {
      tickers.push(data[i])
    }
  }
  var url = `https://sandbox.iexapis.com/stable/stock/market/batch?types=chart&symbols=${tickers.join()}&range=5y&filter=date,label,close&token=${window.iexkkaccess}`
 
  return (
  $.ajax({
    method: 'GET',
    url: `${url}`
  }))
};

export const fetchBatchQuote = (data) => {
  var tickers = []

  for (let i = 0; i < data.length; i++) {
    if (!tickers.includes(data[i].ticker)) {
      tickers.push(data[i].ticker)
    }
  }
  var url = `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${tickers.join()}&types=quote&token=${window.iexkkaccess}`
  return (
    $.ajax({
      method: 'GET',
      url: `${url}`
    }))
}

export const fetchAllStocks = () => {
 
  return (
    $.ajax({
      method: 'GET',
      url: `api/assets`
    }))

}


