import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from './toolbar';
import { logout } from '../../actions/session_actions'

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],

});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);