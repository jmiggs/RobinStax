import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup',
  navLink: <Link to="/login"><div className="signlogprompt">Already Have an Account?</div></Link>,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
