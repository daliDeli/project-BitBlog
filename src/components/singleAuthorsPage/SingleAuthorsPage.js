import React, { Component } from 'react';

import { communicationService } from "../../services/communicationService";
import Address from "./Address";
import Company from "./Company";
import NameSurname from "./NameSurname";

import "../MainPage.css";

export default class SingleAuthorsPage extends Component {
    constructor() {
        super();
        this.state = {
            author: {}
        }
    }

    fetchSingleAuthorData() {

        let authorId = this.props.match.params.id;
        communicationService.getSingleAuthor(authorId,
            (authorData) => {
                const author = authorData.data;
                console.log(author);
                this.setState({
                    author
                },
                    (error) => console.warn(error)
                )
            });
    }

    componentDidMount() {
        this.fetchSingleAuthorData();
        
    }

    render() {
        if (this.state.author === null) {
            return "Loading data";
        }
        const nameSurnameData = {
            name: this.state.author.name,
            username: this.state.author.username,
            email: this.state.author.email,
            phone: this.state.author.phone
        }
        return (
            <main>
                <div className="container">
                <NameSurname nameSurnameData={nameSurnameData} />
                <hr />

                <div className="row">
                <Address address={this.state.author.address} />
             
                <Company company={this.state.author.company} />
                </div>
                </div>

            </main>
        )
    }
}