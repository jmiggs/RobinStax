
export const fetchStock = (sym) => (
  $.ajax({
    method: 'GET',
    url: '/iex/data',
    data: { sym },
  })
);

