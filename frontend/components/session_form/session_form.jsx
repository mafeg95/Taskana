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
    this.props.processForm(user).then((res) => {
      this.props.closeModal();
      this.props.history.push(`/teams/${res.team.id}`);
    });
  }

  handleSubmitDemo(e) {
    e.preventDefault();
    this.props.demoLogin().then(() => this.props.history.push("/teams/1")).then(this.props.closeModal);
  }

  componentWillUnmount() {

    if (this.props.formType === 'Log In' || this.props.formType === 'Sign Up'){
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
        <div onClick={this.props.closeModal} className="close-x">&times;</div>
        <div className="login-form-container">
          <h1>{this.props.formTitle}</h1>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className="login-form">
              <label htmlFor="email">
                Email Address
              </label>
                <input id="email" type="text"
                  onChange={this.update('username')}
                  value={this.state.username}
                  className="login-input" required placeholder="name@company.com"/>
              <label htmlFor="password">
                Password
              </label>
                <input id="password" type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input" required placeholder="Password"/>
                <input className="session-submit button" type="submit" value={this.props.formType} />
              <button className="session-submit" onClick={this.handleSubmitDemo}>Demo User</button>
            </div>
          </form>
          <footer>
            <p>{this.props.navMessage}</p> {this.props.otherForm}
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
