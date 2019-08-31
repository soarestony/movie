import React from 'react';
import "./App.css";

class InfoRow extends React.Component{
  render(){
      return <li key={this.props.movie.id}>
               
        <div className="movieSection">
          <p>{this.props.movie.title}</p>
          <p>{this.props.movie.overview}</p>
          <img alt="poster" height = "250px" src={this.props.movie.poster_src}/>
          <p>{this.props.movie.original_language}</p>
        </div>
                 
      </li>} 
}


export default MovieRow