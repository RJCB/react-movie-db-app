// https://api.themoviedb.org/3/movie/550?api_key=9f98ce0255e30b167db097f683d36b39
import axios from "axios";
import { BASE_URL } from "../constants";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY

export const fetchTrending = async (mediaType) => {
    if (sessionStorage.getItem(`trending-${mediaType}`)) {
        return await JSON.parse(sessionStorage.getItem(`trending-${mediaType}`));
    }
    else {
        try {
            const response = await axios.get(`${BASE_URL}/trending/${mediaType}/day?api_key=${API_KEY}`);
            sessionStorage.setItem(`trending-${mediaType}`, JSON.stringify(response.data.results));
            return response.data.results
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchPopular = async (mediaType) => {
    if (sessionStorage.getItem(`popular-${mediaType}`)) {
        return await JSON.parse(sessionStorage.getItem(`popular-${mediaType}`));
    }
    else {
        try {
            const response = await axios.get(`${BASE_URL}${mediaType}/popular?api_key=${API_KEY}`);
            sessionStorage.setItem(`popular-${mediaType}`, JSON.stringify(response.data.results));
            return response.data.results
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchBySearch = async (keyword) => {
    if (sessionStorage.getItem(`${keyword}`)) {
        return await JSON.parse(sessionStorage.getItem(`${keyword}`));
    }
    else {
        try {
            const response = await axios.get(`${BASE_URL}search/multi?api_key=${API_KEY}&query=${keyword}`);
            sessionStorage.setItem(`${keyword}`, JSON.stringify(response.data.results));
            return response.data.results
        } catch (error) {
            console.log(error);
        }
    }
}

// const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// // Sizes: w300, w780, w1280, original
// const BACKDROP_SIZE = 'w1280';
// // w92, w154, w185, w342, w500, w780, original
// const POSTER_SIZE = 'w780';