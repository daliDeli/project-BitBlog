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
            <main className="container">
                <div className="row">
                <h2 className='col-12'>AUTHORS({this.state.authors.length})</h2>
                
                 {this.state.authors.map( author =>{
                    return(
                        <div className="col-12 col-md-4 authors"  key={author.id}>
                            <Link to={`/authors/${author.id}`}>
                            <img className="img-circle" alt="Author" src="http://wpi-strategy.com/site/wp-content/uploads/2017/03/placeholder-1.png"/>
                            <h4>{author.name}</h4>
                            </Link>
                            <hr/>
                        </div>
                    )
                })}  
                </div>
            </main>
        )
    }
}