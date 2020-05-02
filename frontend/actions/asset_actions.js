import * as IEXutil from '../util/iex_util.jsx';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_STOCKs = ''
export const RECEIVE_DATA = 'RECEIVE_DATA' 

// create APIutil AJAX request

export const receiveData = (data, sym) => {
  return ({
  type: RECEIVE_DATA,
  data,
  sym
})
};

const receiveErrors = (errors) => {
  return ({
  type: RECEIVE_ERRORS,
  errors,
});
}

export const ThunkFetchQuote = (sym) => (dispatch) => {

  return (
  IEXutil.fetchStockQuote(sym).then(data => (dispatch(receiveData(data, sym))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};
