import React from "react";
import Messages from "./Message.jsx";
import $ from "jquery";
import { Link } from "react-router-dom"
class Inbox extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      userID: 1,
    };
  }

  componentDidMount() {
    $.get(`/messages/inbox/user/${this.state.userID}`, (data) => {})
    .done((data) => {
    this.setState({ data });
  })
  }
  
  render() {
      console.log('*********state*********',this.state.data)
    return (
      <div>
        <Link to={`/messages/new/${this.state.userID}`}>
        <button type="button" class="btn btn-success">New Message</button>
        </Link>
        {this.state.data.map((ele, i) => {
          return <Messages key={i} data={ele} />;
        })}
      </div>
    );
  }
}

export default Inbox;
