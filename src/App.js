import React from "react";
import axios from "axios";
import Movie from "./Movie";
import SplitText from "react-pose-text";
import "./App.css";
// import { async } from "q";

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 150
  }
};

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
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              Loading..........
            </SplitText>
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
