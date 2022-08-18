import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: {path: "title", order: "asc" }
   };

   componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres });
   }

  render() {
    return ();
  }
}

export default Movies;