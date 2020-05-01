import * as IEXutil from '../util/iex_util.jsx';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_ERRORS = 'RECEIVE_SESSION_ERRORS';

// create APIutil AJAX request

export const receiveStock = (stock) => {
  return ({
  type: RECEIVE_STOCK,
  stock,
})
};

const receiveErrors = (errors) => {
  return ({
  type: RECEIVE_ERRORS,
  errors,
});
}

export const ThunkFetchQuote = (sym) => (dispatch) => {
  debugger
  return (
  IEXutil.fetchStockQuote(sym).then(stock => (dispatch(receiveStock(stock))),
    err => (dispatch(receiveErrors(err.responseJSON))),
  )
  )
};
