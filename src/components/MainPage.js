import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Post from "./Post";
import { communicationService } from "../services/communicationService";
import "./MainPage.css";

export default class MainPage extends Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.fetchAllPostData = this.fetchAllPostData.bind(this);

    }

    fetchAllPostData() {
        communicationService.getBlogPosts((postData => {
            const posts = postData.data;
            this.setState({
                posts
            })
        }),
            (error => {
                console.log(error);
            }));
    }

    componentDidMount() {
        this.fetchAllPostData();
    }



    render() {
        return (
            <main className="container-fluid">
                <div className="row">
                    <h2 className=" col-12" >
                        POSTS
                    </h2>
                    
                        {this.state.posts.map((post, i) => {
                            if (i < 10) {
                                return (
                                    <div className="col-12 col-md-4 align-center post" key={i} >
                                    <Link to={`/posts/${post.id}`}  >
                                        <Post title={post.title} body={post.body} />
                                    </Link>
                                    </div>
                                )
                            }
                        }

                        )}
                  
                </div>
            </main>
        )
    }
}

