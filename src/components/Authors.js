import React, {Component} from "react";
import { Link } from "react-router-dom";

import { communicationService } from "../services/communicationService";

export default class Authors extends Component {
    constructor(){
        super();

        this.state = {
            authors:[]
        }
    }

    fetchAllAuthorsData(){
        communicationService.getAuthorsData((authorsData => {
            const authors= authorsData.data;
            this.setState({
                authors
            })
        }),
        (error => {
            console.log(error);
        }));
    }
    
    componentDidMount(){
        this.fetchAllAuthorsData();
        
    }

    render(){
        return(
            <main>
                <h2>AUTHORS({this.state.authors.length})</h2>
                
                 {this.state.authors.map( author =>{
                    return(
                        <div  key={author.id}>
                            <Link to={`/authors/${author.id}`}>
                            {author.name}
                            </Link>
                            <hr/>
                        </div>
                    )
                })}  
            </main>
        )
    }
}