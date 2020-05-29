import * as WLutil from '../util/watchlist_util';

export const RECEIVE_WATCHLISTS = 'RECEIVE_WATCHLISTS';
export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_POST_SUCCESS = 'RECEIVE_POST_SUCCESS';
export const RECEIVE_WL_ERRORS = 'RECEIVE_WL_ERRORS';
export const CLEAR = 'CLEAR';

export const clear = () => {
  return({
    type: CLEAR
  })
}

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

const receivePostSucces = (data) => {
  return({
    type: RECEIVE_POST_SUCCESS,
    data,
  })
}

const receiveErrors = (errors) => {
  return ({
  type: RECEIVE_ERRORS,
  errors,
});
}

const receiveWlErrors = (status) => {
  debugger
  return ({
  type: RECEIVE_WL_ERRORS,
  status,
});
}

export const createWatchlist = (data) => (dispatch) => {
  console.log(data)
  WLutil.createWatchlist(data).then(data =>
    (dispatch(receiveWatchlists(data))),
    err => (dispatch(receiveWlErrors(err.responseJSON)))
  )
}

export const fetchWatchlists = (data) => (dispatch) => {
  console.log(data)
  WLutil.fetchWatchlists(data).then(data =>
    (dispatch(receiveWatchlists(data))),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )
}
export const fetchWatchlist = (id) => (dispatch) => {
  WLutil.fetchWatchlist(id).then(data => {
    (dispatch(receiveWatchlist(data)));
  }, 
    err => (dispatch(receiveErrors(err.responseJSON)))
  )
}

export const postWatchlistItems = (wls, sym) => (dispatch) => {
  console.log('hit actions')
  WLutil.postWatchlistItems(wls, sym).then(data => {
    (dispatch(receivePostSucces(data)))
  },
    err => (dispatch(receiveErrors(err.responseJSON)))
  )
}