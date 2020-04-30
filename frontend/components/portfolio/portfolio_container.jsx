import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from './portfolio';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);