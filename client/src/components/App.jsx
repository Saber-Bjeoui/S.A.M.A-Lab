import React from "react";

import Login from "./authentication/Login.jsx";
import Signup from "./authentication/Signup.jsx";
import DashBoard from "./dashboard/DashBoard.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      redirected: null,
    };
    this.takeusername = this.takeusername.bind(this);
  }

  takeusername(user, path) {
    this.setState({
      username: user,
      redirected: path,
    });
    console.log(this.state);
  }

  render() {
    if (this.state.redirected === null) {
      return (
        <div>
          <Signup func={this.takeusername} />
        </div>
      );
    } else if (this.state.redirected === "/login")
      return (
        <div>
          <Login func={this.takeusername} />
        </div>
      );
    else if (this.state.redirected === "/home") {
      return (
        <div>
          <DashBoard /* username={this.state.username} */ />
        </div>
      );
    }
  }
}

export default App;
