import React, { Component } from "react";

import { communicationService } from "../services/communicationService";
import "./MainPage.css";

export default class SinglePostPage extends Component {
    constructor() {
        super();
        this.state = {
            post: {}
        }
    }

    fetchSinglePostData() {
        let postId = this.props.match.params.id;
        communicationService.getSingleBlogPost(postId,
            (postData) => {
                const post = postData.data;
                this.setState({
                    post
                },
                    (error) => console.warn(error)
                )
            });
    }

    componentDidMount() {
        this.fetchSinglePostData();
    }

    render() {
        if (this.state.post === null) {
            return "Loading data";
        }
        return (
            <main>
                <div>
                    <h2> {this.state.post.title} </h2>
                </div>
                <div>
                    <p>{this.state.post.body}</p>
                </div>
               
            </main>
                    )
    }
}