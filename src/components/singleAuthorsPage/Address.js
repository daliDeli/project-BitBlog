import React, { Component } from "react";

export default class Address extends Component {
    render() {
        if (this.props.address === undefined) {
            return "Loading"
        }
        return (
            <div className="col-12 col-md-6 text-left singlePost">

                <h2>ADDRESS</h2>
                <h5>City</h5>
                <p>{this.props.address.city}</p>
                <h5>Street</h5>
                <p>{this.props.address.street}</p>
                <h5>Zipcode</h5>
                <p>{this.props.address.zipcode}</p>

            </div>
        )
    }
}