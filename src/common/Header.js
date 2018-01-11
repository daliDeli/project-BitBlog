import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./Header.css";

export default class Header extends Component {

    goBack() {
        window.history.back();
    }

    render() {
        return (
            <header className="container-fluid">
                <h1 className="text-center">
                    BitBLOG
                </h1>
                <nav className="nav">
                    <ul className="nav mx-auto ">
                        <div className="row">
                            <Link to="/" class="nav-link">
                                <li className="nav-item"> Home</li>
                            </Link>
                            <Link to="/authors" class="nav-link">
                                <li className="nav-item"> Authors</li>
                            </Link>
                            <Link to="/about" class="nav-link">
                                <li className="nav-item">About</li>
                            </Link>
                        </div>
                    </ul>
                    <div className="row ">
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit" onClick={this.goBack}>
                                Back
                        </button>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}