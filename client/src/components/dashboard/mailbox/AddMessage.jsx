import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class AddMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: 1,
      users: [],
      subject: "",
      text: "",
      recieverID: "",
      redirect: null,
    };
  }

  handleChange(e) {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  getusers() {
    $.ajax({
      url: `/users`,
      type: "get",
      contentType: "aplication/json",
    }).done((data) => {
      this.setState({
        users: data,
      });
    });
  }

  addMessage(e) {
    e.preventDefault();
    axios
      .post("/message/add", {
        userID: this.state.userID,
        subject: this.state.subject,
        text: this.state.text,
        recieverID: this.state.recieverID,
      })
      .then((result) => {
        console.log(result);
        this.setState({ redirect: "/projects" });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getusers();
  }

  render() {
    console.log(this.state);
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <h1 className="h3 mb-4 text-gray-800">Send a message</h1>
        <form>
          <div className="form-group">
            <label htmlFor="org-name">Send message to</label>
            <select
              className="form-control form-control-lg"
              onChange={this.handleChange.bind(this)}
              value={this.state.recieverID}
              name="recieverID"
            >
              {this.state.users.map((user) => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.username}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="org-name">subject:</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              aria-describedby="organization-name"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="org-description">text: </label>
            <textarea
              className="form-control"
              id="text"
              rows="3"
              name="text"
              onChange={this.handleChange.bind(this)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.addMessage.bind(this)}
          >
            Send message
          </button>
        </form>
      </div>
    );
  }
}
export default AddMessage;
