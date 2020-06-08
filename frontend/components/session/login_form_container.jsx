import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { fetchAll } from '../../util/iex_util';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Login',
  // eslint-disable-next-line react/no-unescaped-entities
  navLink: <Link to="/signup"><div className="signlogprompt">Don't have an account? Sign Up!</div></Link>,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  fetchAll: () => fetchAll()
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
