import React, { Component } from "react";

export default class Company extends Component {

    render(){
        if (this.props.company === undefined) {
            return "Loading"
        }
        console.log(this.props)
        return(
            <div className="col-12 col-md-5 text-left">            
                <h2>COMPANY</h2>
                <h5>Company Name:{this.props.company.name}</h5>
                <h5>Slogan:{this.props.company.catchPhrase}</h5>
            </div>
        )
    }
}