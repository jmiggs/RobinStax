/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = { ...this.state };
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1 className="form-head"> Welcome to RobinStax </h1>
          {this.props.formType === 'signup' ? <div className="signprompt"> So easy! All we need is username and email</div> : ''}
          <br />
          <div className="please-promt">
            {/* Please {this.props.formType}! */}
          </div>
          {/* {this.renderErrors()} */}
          <br />
          <label>
            <div className="logintext">Username</div>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
            />
          </label>

          <br />
          <label>
            <div className="logintext">Password</div>


            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />

          </label>
          <br />
          <div id="signlog">{this.props.navLink}</div>
          <br />
          <input className="session-submit" type="submit" value={this.props.formType} />

        </form>
      </div>

    );
  }
}

export default SessionForm;
