import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Footer from "./common/Footer";
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
       <Footer/>
      </div>
    );
  }
}

export default App;

$(document).on('change keyup paste', '#searchMovie', function () {
  let input = $('#searchMovie').val();
  console.log(input);

  let request = $.ajax({
      url: 'http://api.tvmaze.com/search/shows',
      method: 'GET',
      data: {
          q: input
      }
  });

  request.done(output => {

      $('.searchList').html('');
      console.log(output);
      output.forEach((e, i) => {
          let title = $('<li>');
          let link = $('<a>');

          link.text(e.show.name);
          link.attr({
              'value': e.show.id,
              'href': '#'
          });

          title.append(link);
          $('.searchList').append(title);
      })
  });


});


$(document).on('click', 'a', function () {
  var id = $(this).attr('value');

  localStorage.setItem('key', id);
  location.replace('single.html');
});


