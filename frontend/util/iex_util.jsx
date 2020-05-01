
export const fetchStockQuote = (sym) => (
  $.ajax({
    method: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${sym}/quote?token=${window.iexkkaccess}`,
  })
);

