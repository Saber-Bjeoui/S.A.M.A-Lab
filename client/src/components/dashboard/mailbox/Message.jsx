import React from "react";
import { Link } from "react-router-dom"
class Messages extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          userID: 1,
        }
    }
    render() {
        console.log(this.props.data)
    return (
      <div>
        <div>
         
          <div className="card card-primary card-outline">
            {/* /.card-header */}
            <div className="card-body p-0">
              <div className="table-responsive mailbox-messages">
                <table className="table table-hover table-striped">
                  <tbody>
                    <tr>
                      <td className="mailbox-name">
                        <Link to={`/message/${this.state.userID}`}> {this.props.data.subject} </Link>
                      </td>
                      <td className="mailbox-subject">
                       { this.props.data.message_text }
                      </td>
                      <td className="mailbox-attachment" />
                     
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages ;