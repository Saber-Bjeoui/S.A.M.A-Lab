import React from "react";
import Messages from "./Message.jsx";
import $ from "jquery";
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
        {this.state.data.map((ele, i) => {
          return <Messages key={i} data={ele} />;
        })}
      </div>
    );
  }
}

export default Inbox;
