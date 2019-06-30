import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  onEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  onPasswordChange = e => {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <div className="container w-50 mt-5">
        <h3>Login</h3>
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="enter email"
              value={this.state.email}
              onChange={this.onEmailChange}
              autoFocus
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="enter password"
              value={this.state.password}
              onChange={this.onPasswordChange}
              required
              className="form-control"
            />
          </div>
          <button className="btn btn-primary" id="primary-button">submit</button>
        </form>
      </div>
    )
  }
}

export default Login;