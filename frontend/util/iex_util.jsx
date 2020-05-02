
export const fetchStockQuote = (sym) => (
  $.ajax({
    method: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${sym}/chart/5dm?token=${window.iexkkaccess}`,
  })
);

