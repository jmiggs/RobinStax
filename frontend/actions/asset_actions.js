import * as IEXutil from '../util/iex_util.jsx';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_STOCKs = ''
export const RECEIVE_DATA = 'RECEIVE_DATA' 
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE' 

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

const receiveErrors = (errors) => {
  return ({
  type: RECEIVE_ERRORS,
  errors,
});
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





export const TestThunk = (sym, tab) => (dispatch) => {

  return (
  IEXutil.fetch1Y(sym).then(data => console.log(data),
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


