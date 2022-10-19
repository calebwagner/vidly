import React, { Component } from "react";
// import MoviesTable from "./moviesTable";
// import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
// import { paginate } from "../utils/paginate";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4
   };

   componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
   };

   handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
   };

  handlePageChange = page => {
     console.log(page)
   }


  render() {
    const { length: count } = this.state.movies;

    return (

      <Pagination itemsCount={count} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} />
    )
  }
}

export default Movies;