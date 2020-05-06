import * as transUtil from '../util/transaction_util'

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';


const receiveTransaction = (data) => {
  return ({
  type: RECEIVE_TRANSACTION,
  data,
})
};

const receiveErrors = (errors) => {
  return ({
  type: RECEIVE_ERRORS,
  errors,
});
}




export const postTransaction = (data) => (dispatch) => {
  transUtil.postTransaction(data).then(data => (dispatch(receiveTransaction(data))),
    err => (dispatch(receiveErrors(err.responseJSON))),
    )
}