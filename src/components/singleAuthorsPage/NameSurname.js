import React, { Component } from "react";

export default class NameSurname extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5">
                    <img alt="Placeholder" src="https://www.protocols.io/img/avatar_placeholder.jpg" />
                </div>

                <div className="col-12 col-md-5 text-left">
                    <h5>Name and Surname:{this.props.nameSurnameData.name}</h5>
                    <h5>Username:{this.props.nameSurnameData.username}</h5>
                    <h5>Email:{this.props.nameSurnameData.email}</h5>
                    <h5>Phone:{this.props.nameSurnameData.phone}</h5>
                </div>
            </div>

        )
    }
}