import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Main from './main';

const mapStateToProps = ({ session, entities: { users } }, ownProps ) => ({
  currentUser: users[session.id],
  renderType: 'Asset',
  symbol: ownProps.match.params.symbol,

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);