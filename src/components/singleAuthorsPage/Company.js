import React, { Component } from "react";

export default class Company extends Component {

    render(){
        if (this.props.company === undefined) {
            return "Loading"
        }
       
        return(
            <div className="col-12 col-md-4 text-left singlePost">            
                <h2>COMPANY</h2>
                <h5>Company Name</h5>
                <p>{this.props.company.name}</p>
                <h5>Slogan</h5>
                <p>{this.props.company.catchPhrase}</p>
            </div>
        )
    }
}