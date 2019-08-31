import React from 'react';
import "./App.css";

class MovieRow extends React.Component{
  render(){
      return <li key={this.props.movie.id}>
          
             
        <div className="movieSection">
            <div className="movieImage">
                <img alt="poster" height = "250px" src={this.props.movie.poster_src}/>
            </div>
            <div className="movieInfo">
                <div className="movieTitle">
                    <p>{this.props.movie.title}</p>
                </div>
                <div className="movieDescrition">
                  {/* <div className="circle"> */}
                    {this.props.movie.popularity}%
                  {/* </div> */}
                  <div className="movieRelease">
                    {this.props.movie.release_date}
                  </div>
                  
                  <div className="movieOveriew">
                    <p>{this.props.movie.overview}</p>
                  </div>                  
                </div>
            </div>
        </div>
                     
          
      </li>} 
}


export default MovieRow