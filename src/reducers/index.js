import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIE_SUCCESS,
    FETCH_POPULAR_REQUEST,
    FETCH_POPULAR_SUCCESS,
    FETCH_TOP_REQUEST,
    FETCH_TOP_SUCCESS,
    FETCH_PLAYING_REQUEST,
    FETCH_PLAYING_SUCCESS
} from '../actions';

const movies = ( state = { isFetching: false, items: [] }, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.results
            };
        default:
            return state
    }
};

const movie = ( state = { isFetching: false, info: {} }, action) => {
    switch (action.type) {
        case FETCH_MOVIE_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                info: action.movie
            };
        default:
            return state
    }
};

const popular = ( state = { isFetching: false, items: [] }, action) => {
    switch (action.type) {
        case FETCH_POPULAR_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_POPULAR_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.results
            };
        default:
            return state
    }
};

const top = ( state = { isFetching: false, items: [] }, action) => {
    switch (action.type) {
        case FETCH_TOP_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_TOP_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.results
            };
        default:
            return state
    }
};

const playing = ( state = { isFetching: false, items: [] }, action) => {
    switch (action.type) {
        case FETCH_PLAYING_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_PLAYING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.results
            };
        default:
            return state
    }
};

export default combineReducers({ movies, movie, popular, top, playing, routing });
