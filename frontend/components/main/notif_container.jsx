import React from 'react';
import { Link } from 'react-router-dom';
import Notifs from './notif';
import { connect } from 'react-redux';

import { clear } from '../../actions/watchlist_actions'

const mapStateToProps = (state) => ({
  notifs: state.entities.UI
});

const mapDispatchToProps = (dispatch) => ({
  clearNotif: () => dispatch(clear())
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifs);