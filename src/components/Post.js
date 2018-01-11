import React, { Component } from 'react';

export default class Post extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <main>
                <h4>
                    {this.props.title}
                </h4>
                <p>
                    {this.props.body}
                </p>
            </main>
        )
    }
}    