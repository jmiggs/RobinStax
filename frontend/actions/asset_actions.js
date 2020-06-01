import * as IEXutil from '../util/iex_util.jsx';
import * as assetUtil from '../util/asset_util';
import * as WlUtil from '../util/watchlist_util'


export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_STOCKs = '';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';
export const RECEIVE_INFO = 'RECEIVE_INFO';
export const RECEIVE_NEWS = 'RECEIVE_NEWS'; 
export const RECEIVE_EARNINGS = 'RECEIVE_EARNINGS';
export const UPDATE_INIT_STAT = 'UPDATE_INIT_STAT';
export const RECEIVE_BATCH = 'RECEIVE_BATCH';
export const RECEIVE_BATCH_QUOTE = 'RECEIVE_BATCH_QUOTE';
export const RECEIVE_EMPTY = 'RECEIVE_EMPTY';
export const RECEIVE_ALL_NEWS = 'RECEIVE_ALL_NEWS';

// create APIutil AJAX request

export const receiveData = (data, sym, tab) => {
  return ({
  type: RECEIVE_DATA,
  data,
  sym,
  tab
})
};

export const receiveQuote = (data) => {
  return ({
  type: RECEIVE_QUOTE,
  data,
})
};

export const receiveInfo = (data) => {
  return ({
    type: RECEIVE_INFO,
    data,
  })
}

export const receiveNews = (data) => {
  return ({
    type: RECEIVE_NEWS,
    data,
  })
}

export const receiveEarnings = (data) => {
  return ({
    type: RECEIVE_EARNINGS,
    data,
  })
}

const receiveErrors = (errors) => {
  return ({
  type: RECEIVE_ERRORS,
  errors,
});
}

export const updateInitStat = () => {
  return ({
    type: UPDATE_INIT_STAT,
  })
}

export const receiveBatch = (data) => {
  return ({
    type: RECEIVE_BATCH,
    data: data
  })
}

export const receiveBatchQuote = (data) => {
  return ({
    type: RECEIVE_BATCH_QUOTE,
    data: data
  })
}

export const receiveEmpty = (data) => {
  return ({
    type: RECEIVE_EMPTY,
    data: 'empty'
  })
}

const receiveAllNews = (data) => {
  return({
    type: RECEIVE_ALL_NEWS,
    data: data
  })
}


export const ThunkFetch5D = (sym, tab) => (dispatch) => {
  return (
  IEXutil.fetch5D(sym).then(data => (dispatch(receiveData(data, sym, tab))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};

export const ThunkFetch1D = (sym, tab) => (dispatch) => {

  return (
  IEXutil.fetch1D(sym).then(data => (dispatch(receiveData(data, sym, tab))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};

export const ThunkFetch1M = (sym, tab) => (dispatch) => {

  return (
  IEXutil.fetch1M(sym).then(data => (dispatch(receiveData(data, sym, tab))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};

export const ThunkFetch3M = (sym, tab) => (dispatch) => {

  return (
  IEXutil.fetch3M(sym).then(data => (dispatch(receiveData(data, sym, tab))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};

export const ThunkFetch1Y = (sym, tab) => (dispatch) => {
  return (
  IEXutil.fetch1Y(sym).then(data => (dispatch(receiveData(data, sym, tab))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};

export const ThunkFetch5Y = (sym, tab) => (dispatch) => {
  return (
  IEXutil.fetch5Y(sym).then(data => (dispatch(receiveData(data, sym, tab))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};

export const ThunkFetchQuote = (sym) => (dispatch) => {
  return (
  IEXutil.fetchQuote(sym).then(data => (dispatch(receiveQuote(data, sym))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};

export const ThunkFetchInfo = (sym) => (dispatch) => {
  IEXutil.fetchInfo(sym).then(data => (dispatch(receiveInfo(data, sym))),
    err => (dispatch(receiveErrors(err.responseJSON))),
    )
}

export const ThunkFetchNews = (sym) => (dispatch) => {
  IEXutil.fetchNews(sym).then(data => (dispatch(receiveNews(data, sym))),
    err => (dispatch(receiveErrors(err.responseJSON))),
    )
}

export const ThunkFetchEarnings = (sym) => (dispatch) => {
  IEXutil.fetchEarnings(sym).then(data => (dispatch(receiveEarnings(data, sym))),
    err => (dispatch(receiveErrors(err.responseJSON))),
    )
}

export const updateInitStatus = () => (dispatch) => {
  dispatch(updateInitStat())
}


/// PORTFOLIO INITIAL LOAD
export const fetchBatch5D = (data) => (dispatch) => {

  return (
  assetUtil.fetchBatch5D(data).then(data => (dispatch(receiveBatch(data))),
    err => (dispatch(receiveErrors(err.responseJSON))),
    )
  )
}

export const fetchAllNews = () => (dispatch) => {

  return(
    IEXutil.fetchAllNews()
      .then(data =>
        (dispatch(receiveAllNews(data))),
        err => (dispatch(receiveErrors(err.responseJSON))),
      )
  )

}

export const ThunkFetchBatch5D = (data, tab) => (dispatch) => {

  return (
  assetUtil.fetch5DBatch(data, tab).then(data => (dispatch(receiveBatch(data, tab))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};

export const ThunkFetchBatch1D = (data, tab) => (dispatch) => {
  return (
  assetUtil.fetch1DBatch(data, tab).then(data => (dispatch(receiveBatch(data, tab))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};

export const ThunkFetchBatch1M = (data, tab) => (dispatch) => {

  return (
  assetUtil.fetch1MBatch(data, tab).then(data => (dispatch(receiveBatch(data, tab))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};

export const ThunkFetchBatch3M = (data, tab) => (dispatch) => {

  return (
  assetUtil.fetch3MBatch(data, tab).then(data => (dispatch(receiveBatch(data, tab))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};

export const ThunkFetchBatch1Y = (data, tab) => (dispatch) => {
  return (
  assetUtil.fetch1YBatch(data, tab).then(data => (dispatch(receiveBatch(data, tab))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};

export const ThunkFetchBatch5Y = (data, tab) => (dispatch) => {
  return (
  assetUtil.fetch5YBatch(data, tab).then(data => (dispatch(receiveBatch(data, tab))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};

export const fetchBatchQuote = (data) => (dispatch) => {

  return (
  assetUtil.fetchBatchQuote(data).then(data => (dispatch(receiveBatchQuote(data))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};













// will implement this later. this is for initial render of asst view

// export const ThunkFetchQuote = (sym) => (dispatch) => {

//   return (
//   IEXutil.fetchQuote(sym).then(data => (dispatch(receiveData(data, sym))),
//     err => (dispatch(receiveErrors(err.responseJSON))),
//   )
//   )
// };


