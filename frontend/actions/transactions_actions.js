import * as transUtil from '../util/transaction_util'

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SUCCESS_BUY = 'RECEIVE_SUCCESS_BUY';
export const RECEIVE_FAILED_SELL = 'RECEIVE_FAILED_SELL';
export const RECEIVE_BUY_ZERO = 'RECEIVE_BUY_ZERO';
export const RECEIVE_FAILED_BUY = 'RECEIVE_FAILED_BUY';


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
    status: ['Succesful Transaction!']
  })
}

export const receiveFailedSell = () => {

  return({
    type: RECEIVE_FAILED_SELL,
    status: ['Not Enough Shares to Sell']
  })
}

export const receiveZeroBuy = () => {
  return({
    type: RECEIVE_BUY_ZERO,
    status: ['Please Enter an Amount']
  })
}

export const receiveFailedBuy = () => {
  return({
    type: RECEIVE_FAILED_BUY,
    status: ['Insufficient Buying Power']
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

    transUtil.fetchTransactions()
    .then(data => {
      dispatch(receiveTransactions(data))
    ,
      err => (dispatch(receiveErrors(err.responseJSON)))
    })
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