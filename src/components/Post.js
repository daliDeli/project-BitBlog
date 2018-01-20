import React, { Component } from 'react';
export default class Post extends Component {
   

    render() {
        return (
            <div className="card">
                <img alt="" className="card-img-top" src="http://chrisenss.com/wp-content/uploads/2016/10/wildwest.png"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.body}</p>

                </div>
            </div>
        )
    }
}    
