import React from "react";
import axios from "axios";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      password: "",
      username: "",
      repPassword: "",
      nextpath: "/home",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkPass = this.checkPass.bind(this);
  }

  checkPass() {
    if (this.state.password !== this.state.repPassword) {
      console.log("wrong pass");
      this.setState({
        password: null,
      });
      return;
    }
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password !== this.state.repPassword) {
      alert("the pass must be the same");
      return false;
    }
    axios
      .post("/users", this.state)
      .then((res) => {
        console.log(res);
        this.props.func(this.state.username, this.state.nextpath);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.props.func);
    return (
      <div className="signup-form">
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Sign up</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required="required"
              name="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              required="required"
              name="first_name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              required="required"
              name="last_name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Repeat password"
              required="required"
              name="repPassword"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Sign up
            </button>
            <a
              onClick={() => {
                this.props.func(this.state.username, "/login");
              }}>
              already have an Account
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
