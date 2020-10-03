import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class AddMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {
        senderID: 1,
        receiverID: null,
        subject: "",
        message_text: "",
      },
      redirect: null,
      users: [],
    };
  }

  handleChange(e) {
    console.log(e.target.name, e.target.value);

    this.state.message[e.target.name ] = e.target.value;
    this.setState({ message: this.state.message });
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
      .post("/message/add", this.state.message)
      .then((result) => {
        console.log(result);
        this.setState({ redirect: "/messages/inbox" });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getusers();
  }

  render() {
    console.log(this.state.message);
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
              value={this.state.receiverID}
              name="receiverID"
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
              id="message_text"
              rows="3"
              name="message_text"
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
