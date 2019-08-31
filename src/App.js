import React, { Component } from "react";
import "./App.css";
import MovieRow from './MovieRow.js';
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    // this.performSearch("marvel")
  }

  performSearch(searchTerm){
    console.log("perform search using moviedb");
    const urlString = "https://api.themoviedb.org/3/search/movie?language=pt-US&page=1&include_adult=false&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data sucessfully")
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) =>{
          movie.poster_src = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })
        this.setState({rows: movieRows})
      },

      error: (xhr, status, err) => {
        console.error("Falha to fetch data")
      }
    })
  }

  searchChangeHandler(event){
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }


  render() {
    return (
      <div className="body">
        
        <div className="header">
          <div className="title">
            <h1>Movies</h1>
          </div>
        </div>

        <div className="main">
          <div className="searchBar">
            <input className="searchBox" onChange={this.searchChangeHandler.bind(this)} placeholder="Busque um filme por nome, ano ou gênero..."/>
          </div>          
          {this.state.rows}
        </div>
      </div>
    );
  }
}

export default App;
