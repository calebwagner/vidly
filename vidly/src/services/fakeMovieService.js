import * as genresAPI from "./fakeGenreService";

/**
 * movies object properties:
 * {
 *  _id: string,
 *  title: string,
 *  genre: object,
 *  numberInStock: int,
 *  dailyRentalRate: int,
 *  publishDate: string,
 *  liked: boolean
 * }
 */

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  }
];

export function getMovies() {
  // get movies array && exit function
  return movies;
}

export function getMovie(id) {
  // pass in movie id to find specific movie && return function
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  // find movie id && IF variable is not defined (or has a falsey value) ...
  // THEN set it to an empty object.
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  // find name of movie id found
  movieInDb.name = movie.name;
  // find genre id with the found movie id
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  // find number in stock with found movie id
  movieInDb.numberInStock = movie.numberInStock;
  // find daily rental rate with found movie rate
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  // if not movie id ...
  if (!movieInDb._id) {
    // set id to current date ...
    movieInDb._id = Date.now();
    // push to movies array
    movies.push(movieInDb);
  }

  // exit function
  return movieInDb;
}

export function deleteMovie(id) {
  // find movie id ...
  let movieInDb = movies.find(m => m._id === id);
  // remove that movie object with that id using splice with the indexOf method ...
  // .splice(start, deleteCount) removes 1 element with that index
  movies.splice(movies.indexOf(movieInDb), 1);
  // exit function
  return movieInDb;
}
