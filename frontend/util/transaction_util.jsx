export const postTransaction = (data) => (
  $.ajax({
    method: 'Post',
    url: `api/transactions`,
    data: { data }
  })
);