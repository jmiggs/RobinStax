import * as transUtil from '../util/transaction_util'

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SUCCESS_BUY = 'RECEIVE_SUCCESS_BUY';
export const RECEIVE_FAILED_SELL = 'RECEIVE_FAILED_SELL';


const receiveTransaction = (data) => {
  return ({
  type: RECEIVE_TRANSACTION,
  data,
  })
};

const receiveTransactions = (data) => {
  return({
    type: RECEIVE_TRANSACTIONS,
    data,
  })
}

const receiveSuccesfulBuy = () => {

  return({
    type: RECEIVE_SUCCESS_BUY,
    status: ['Succesfully Transaction! Check Your Portfolio.']
  })
}

export const receiveFailedSell = () => {

  return({
    type: RECEIVE_FAILED_SELL,
    status: ['Not Enough Shares to Sell']
  })
}



const receiveErrors = (errors) => {
  return ({
  type: RECEIVE_ERRORS,
  errors,
});
}

export const postTransaction = (data) => (dispatch) => {
  transUtil.postTransaction(data).then(data => {
    dispatch(receiveTransaction(data));
    dispatch(receiveSuccesfulBuy());
    }, err => (dispatch(receiveErrors(err.responseJSON))),
    )
}

export const fetchTransactions = () => (dispatch) => {
  transUtil.fetchTransactions()
    .then(data =>
      (dispatch(receiveTransactions(data))),
      err => (dispatch(receiveErrors(err.responseJSON)))
    )
}

export const fetchTransaction = (id) => (dispatch) => {
  transUtil.fetchTransaction(id)
    .then(data =>
      (dispatch(receiveTransaction(data))),
      err => (dispatch(receiveErrors(err.responseJSON)))
    )
}