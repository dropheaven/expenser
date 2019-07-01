import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = e => {

  }

  render() {
    return (
      <div className="container w-50 mt-5">
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder="enter email"
              value={this.state.email}
              onChange={this.handleChange}
              autoFocus
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="enter password"
              value={this.state.password}
              onChange={this.handleChange}
              required
              className="form-control"
            />
          </div>
          <button className="btn btn-primary" id="primary-button">submit</button>
        </form>
      </div>
    );
  }
}

export default Login;