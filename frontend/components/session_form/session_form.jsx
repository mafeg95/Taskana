import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({ [field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  componentWillUnmount() {

    if (this.props.match.path === '/login' || this.props.match.path === '/signup'){
      this.props.removeErrors();
    }
  }

  renderErrors() {

    return (
      <ul>
        {this.props.errors.map((error, i) => (
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
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h1>{this.props.formTitle}</h1>
            <br/>
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              <label>Email Address
                <input type="text"
                  onChange={this.update('username')}
                  value={this.state.username}
                  className="login-input"/>
              </label>
              <br/>
              <label>Password
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"/>
              </label>
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
        <div>
          <p>{this.props.navMessage}</p> {this.props.navLink}
            <button onClick={this.props.demoLogin}>Demo User</button>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
