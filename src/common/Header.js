import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./Header.css";

export default class Header extends Component {

    goBack() {
        window.history.back();
    }

    render() {
        return (
           
                <nav className="navbar navbar-expand-lg ">
                    <Link to="/" className="navbar-brand">
                    BitBLOG
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ">
                            <Link to="/" className="nav-link">
                                <li className="nav-item"> Home</li>
                            </Link>
                            <Link to="/authors" className="nav-link">
                                <li className="nav-item"> Authors</li>
                            </Link>
                            <Link to="/about" className="nav-link">
                                <li className="nav-item">About</li>
                            </Link>
                        </ul>

                    </div>
                </nav>
            
        )
    }
}