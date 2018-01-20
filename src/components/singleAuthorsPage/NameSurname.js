import React, { Component } from "react";

export default class NameSurname extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-7 authorImg">
                    <img alt="Placeholder" src="http://wpi-strategy.com/site/wp-content/uploads/2017/03/placeholder-1.png" />
                </div>

                <div className="col-12 col-md-5 text-left singlePost">
                    <h5>Name and Surname</h5>
                    <p>{this.props.nameSurnameData.name}</p>
                    <h5>Username</h5>
                    <p>{this.props.nameSurnameData.username}</p>
                    <h5>Email</h5>
                    <p>{this.props.nameSurnameData.email}</p>
                    <h5>Phone</h5>
                    <p>{this.props.nameSurnameData.phone}</p>
                </div>
            </div>

        )
    }
}