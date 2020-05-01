import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
// import Main from './main';
import Asset from './asset'
import { ThunkFetchQuote } from '../../actions/asset_actions'

const mapStateToProps = ({ session, entities: { users, assets } }) => ({
  currentUser: users[session.id],
  renderType: 'Asset',
  assets,

});

//create fetchStock thunk action and action creator
const mapDispatchToProps = (dispatch) => ({
  fetchStock: (sym) => dispatch(ThunkFetchQuote(sym))
});

export default connect(mapStateToProps, mapDispatchToProps)(Asset);