import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Header from "./common/Header";
import MainPage from "./components/MainPage";
import Authors from "./components/Authors";
import SinglePostPage from "./components/SinglePostPage";
import SingleAuthorsPage from "./components/singleAuthorsPage/SingleAuthorsPage";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
       <Switch>
         <Route exact path="/" component={MainPage}/>
         <Route path="/posts/:id" component={SinglePostPage}/>
         <Route exact path="/authors" component={Authors}/>
         <Route path="/authors/:id" component={SingleAuthorsPage}/>
         <Route path="/about" component={About}/>
       </Switch>
      </div>
    );
  }
}

export default App;



