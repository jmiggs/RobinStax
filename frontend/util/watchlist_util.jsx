

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
