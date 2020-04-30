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
      errors: props.errors,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = { ...this.state };
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState({
      username: 'aightson',
      password: '123456',
    });
  }

  renderErrors() {
    // debugger
    return (
      <ul className="ul-hold">
        {this.props.errors.map((error, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="error-hold">
            <li className="errors" key={`error-${i}`}>
              {error}
            </li>
          </div>
        ))}
      </ul>
    );
  }




  render() {
    return (
      <div className="flex-container">
        <div id="background">
          {/* <img src="http://fairhomeoffernc.com/wp-content/uploads/2017/01/Background-Hipster-Holding-House-Money.png"/> */}

          {/* <div className="form-background"> */}
        </div>

        <div className="form-box">
          <div className="form">

            <form onSubmit={this.handleSubmit} className="login-form-box">
              {/* <div className="errors"> */}

              {/* </div> */}
            
              <div className="formatter">
                <h1 className="form-head"> Welcome to RobinStax </h1>
              <div className="signprompt">
                {this.props.errors.length === 0
                  ? this.props.formType === 'signup' ? <div> So easy! All we need is username and password</div> : <div>Try it out! Click the demo button :D</div>
                  : this.renderErrors()}
              </div>
              </div>

              <br />
              <div className="please-promt">
                {/* Please {this.props.formType}! */}
              </div>
              <br />
              <label>
                <div className="logintext username">Username</div>
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
              <div className="buttons">
                <input className="session-submit" type="submit" value={this.props.formType} />

                {this.props.formType !== 'signup' ? <button type="submit" onClick={(e) => this.handleDemo(e)} className="session-submit">demo</button> : ''}

              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
