const tmdbKey = "myKey";
const tmdbBaseUrl = "https://api.themoviedb.org/3/";
const playBtn = document.getElementById("playBtn");

const getGenres = async () => {

  const genreRequestEndpoint = `/genre/movie/list`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      return genres;
    }
  } catch (error) {
    console.log(err);
  }

};

const getMovies = async () => {

  let selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = "discover/movie";
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      let jsonResponse = await response.json();
      let movies = jsonResponse.results;
      return movies;
    }
  } catch (error) {
    console.log(error);
  }

};

//getMovies();

const getMovieInfo = async (movie) => {

  let movieId = movie.id;
  const movieEndpoint = `movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      let movieInfo = await response.json();
      return movieInfo;
    }
  } catch (error) {
    console.log(error);
  }

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {

  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) clearCurrentMovie();
  
  let movies = await getMovies();
  let randomMovie = getRandomMovie(movies);
  let info = await getMovieInfo(randomMovie);
  
  displayMovie(info);

};

// Populates genres for select element
getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
