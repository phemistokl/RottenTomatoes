import api from '../api';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

export const FETCH_POPULAR_REQUEST = 'FETCH_POPULAR_REQUEST';
export const FETCH_POPULAR_SUCCESS = 'FETCH_POPULAR_SUCCESS';
export const FETCH_POPULAR_FAILURE = 'FETCH_POPULAR_FAILURE';

export const FETCH_TOP_REQUEST = 'FETCH_TOP_REQUEST';
export const FETCH_TOP_SUCCESS = 'FETCH_TOP_SUCCESS';
export const FETCH_TOP_FAILURE = 'FETCH_TOP_FAILURE';

export const FETCH_PLAYING_REQUEST = 'FETCH_PLAYING_REQUEST';
export const FETCH_PLAYING_SUCCESS = 'FETCH_PLAYING_SUCCESS';
export const FETCH_PLAYING_FAILURE = 'FETCH_PLAYING_FAILURE';

export const fetchMoviesRequest = query => ({
    type: FETCH_MOVIES_REQUEST,
    query
});

export const fetchMoviesSuccess = ({ data }) => ({
    ...data,
    type: FETCH_MOVIES_SUCCESS
});

export const fetchMovieRequest = id => ({
    type: FETCH_MOVIE_REQUEST,
    id
});

export const fetchMovieSuccess = ({ data }) => ({
    movie: data,
    type: FETCH_MOVIE_SUCCESS
});

export const fetchPopularRequest = () => ({
    type: FETCH_POPULAR_REQUEST
});

export const fetchPopularSuccess = ({ data }) => ({
    ...data,
    type: FETCH_POPULAR_SUCCESS
});

export const fetchTopRequest = () => ({
    type: FETCH_TOP_REQUEST
});

export const fetchTopSuccess = ({ data }) => ({
    ...data,
    type: FETCH_TOP_SUCCESS
});

export const fetchPlayingRequest = () => ({
    type: FETCH_PLAYING_REQUEST
});

export const fetchPlayingSuccess = ({ data }) => ({
    ...data,
    type: FETCH_PLAYING_SUCCESS
});

export const searchMovies = query => dispatch => {
    dispatch(fetchMoviesRequest(query));

    return api.searchMovies(query)
        .then(data => dispatch(fetchMoviesSuccess(data)));
}

export const fetchMoreMovies = ({ query, page }) => dispatch => {
    dispatch(fetchMoviesRequest(query));

    return api.searchMovies(query)
        .then(data => dispatch(fetchMoviesSuccess(data)));
}

export const fetchMovie = id => dispatch => {
    dispatch(fetchMovieRequest(id));

    return api.fetchMovie(id)
        .then(data => dispatch(fetchMovieSuccess(data)));
}

export const fetchPopular = () => dispatch => {
    dispatch(fetchPopularRequest());

    return api.fetchPopular()
        .then(data => dispatch(fetchPopularSuccess(data)));
}

export const fetchTop = () => dispatch => {
    dispatch(fetchTopRequest());

    return api.fetchTop()
        .then(data => dispatch(fetchTopSuccess(data)));
}

export const fetchPlaying = () => dispatch => {
    dispatch(fetchPlayingRequest());

    return api.fetchPlaying()
        .then(data => dispatch(fetchPlayingSuccess(data)));
}
