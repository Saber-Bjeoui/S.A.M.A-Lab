import React from 'react'
import $ from "jquery";
class OrganizationDetail extends React.Component {
    constructor (props){
        super(props)
    }
    delete(e){
        e.preventDefault();
        $.ajax({
            url: "/deleteOrg",
            data: JSON.stringify ({userID: this.props.org.userID, id : this.props.org.id}),
            type: 'POST',
            contentType: 'application/json'
        }).done(this.props.f())
    }

    render(){
        return (
            <div>
                
            </div>
        )
    }
}

export default OrganizationDetail;