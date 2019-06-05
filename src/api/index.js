import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const API_PREFIX = 'https://api.themoviedb.org/3';
const API_KEY = '8c9f0b25d628dc3a96bcc112d2c82e63';

export function searchMovies(query) {
    const params = {
        query,
        api_key: API_KEY,
    };

    return axios.get(`${API_PREFIX}/search/movie`, { params })
        .then(data => camelcaseKeys(data, { deep: true }));
}

export function fetchMovie(id) {
    const params = {
        api_key: API_KEY
    };

    return axios.get(`${API_PREFIX}/movie/${id}`, { params })
        .then(data => camelcaseKeys(data, { deep: true }));
}

export function fetchPopular() {
    const params = {
        api_key: API_KEY,
    };

    return axios.get(`${API_PREFIX}/movie/popular`, { params })
        .then(data => camelcaseKeys(data, { deep: true }));
}

export function fetchTop() {
    const params = {
        api_key: API_KEY
    };

    return axios.get(`${API_PREFIX}/movie/top_rated`, { params })
        .then(data => camelcaseKeys(data, { deep: true }));
}

export function fetchPlaying() {
    const params = {
        api_key: API_KEY
    };

    return axios.get(`${API_PREFIX}/movie/now_playing`, { params })
        .then(data => camelcaseKeys(data, { deep: true }));
}

export default {
    searchMovies,
    fetchMovie,
    fetchPopular,
    fetchTop,
    fetchPlaying
};
