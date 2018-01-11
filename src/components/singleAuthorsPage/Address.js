import React, { Component } from "react";

export default class Address extends Component {
    render() {
        if (this.props.address === undefined) {
            return "Loading"
        }
        return (
            <div className="col-12 col-md-3 col-md-offset-3 text-left">

                <h2>ADDRESS</h2>
                <h5>City:{this.props.address.city}</h5>
                <h5>Street: {this.props.address.street}</h5>
                <h5>Zipcode:{this.props.address.zipcode}</h5>

            </div>
        )
    }
}