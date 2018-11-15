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
    this.handleSubmitDemo = this.handleSubmitDemo.bind(this);
  }

  update(field){
    return e => this.setState({ [field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleSubmitDemo(e) {
    e.preventDefault();
    this.props.demoLogin().then(this.props.closeModal);
  }

  componentWillUnmount() {
    debugger
    if (this.props.formType === 'login' || this.props.formType === 'signup'){
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
      <div className="content">
        <div onClick={this.props.closeModal} className="close-x">X</div>
        <div className="login-form-container">
          <h1>{this.props.formTitle}</h1>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className="login-form">
              <label for="email">
                Email Address
              </label>
                <input id="email" type="text"
                  onChange={this.update('username')}
                  value={this.state.username}
                  className="login-input"/>
              <label for="password">
                Password
              </label>
                <input id="password" type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"/>
                <input className="session-submit button" type="submit" value={this.props.formType} />
              <button className="session-submit" onClick={this.handleSubmitDemo}>Demo User</button>
            </div>
          </form>
          <footer>
            <p>{this.props.navMessage}</p> {this.props.otherForm}
            <br/>
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
