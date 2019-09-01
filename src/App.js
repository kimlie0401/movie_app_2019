import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
// import { async } from "q";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=year"
    );
    this.setState({ movies, isLoading: false });
    // {movies} = {movies: movies}
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading..........</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
