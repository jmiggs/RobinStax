export const postTransaction = (data) => (
  $.ajax({
    method: 'Post',
    url: `api/transactions`,
    data: { data }
  })
);

export const fetchTransactions = () => (
  $.ajax({
    method: 'Get',
    url: `api/transactions/1`
  })
)

export const fetchTransaction = (id) => (
  $.ajax({
    method: 'Get',
    url: `api/transactions/${id}`
  })
)