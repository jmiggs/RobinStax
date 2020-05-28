import * as WLutil from '../util/watchlist_util';

export const RECEIVE_WATCHLISTS = 'RECEIVE_WATCHLISTS';
export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveWatchlists = (data) => {
  return({
    type: RECEIVE_WATCHLISTS,
    data,
  })
}

const receiveWatchlist = (data) => {
  return({
    type: RECEIVE_WATCHLIST,
    data,
  })
}

const receiveErrors = (errors) => {
  return ({
  type: RECEIVE_ERRORS,
  errors,
});
}

export const createWatchlist = (data) => (dispatch) => {
  console.log(data)
  WLutil.createWatchlist(data).then(data =>
    (dispatch(receiveWatchlists(data))),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )
}

export const fetchWatchlists = (data) => (dispatch) => {
  console.log(data)
  WLutil.fetchWatchlists(data).then(data =>
    (dispatch(receiveWatchlists(data))),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )
}