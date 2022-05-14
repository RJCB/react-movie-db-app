import axios from "axios";
import { BASE_URL } from "../constants";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY

export const fetchTrending = async (mediaType) => {
    if (sessionStorage.getItem(`trending-${mediaType}`)) {
        return await JSON.parse(sessionStorage.getItem(`trending-${mediaType}`));
    }
    else {
        try {
            const response = await axios.get(`${BASE_URL}trending/${mediaType}/day?api_key=${API_KEY}`);
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

export const fetchById = async (media_type, id) => {
    if (sessionStorage.getItem(`${id}`)) {
        return await JSON.parse(sessionStorage.getItem(`${id}`));
    }
    else {
        try {
            const response = await axios.get(`${BASE_URL}${media_type}/${id}?api_key=${API_KEY}`);
            sessionStorage.setItem(`${id}`, JSON.stringify(response.data));
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchCredits = async (media_type, id) => {
    if (sessionStorage.getItem(`credits-${id}`)) {
        return await JSON.parse(sessionStorage.getItem(`credits-${id}`));
    }
    else {
        try {
            const response = await axios.get(`${BASE_URL}${media_type}/${id}/credits?api_key=${API_KEY}`);
            sessionStorage.setItem(`credits-${id}`, JSON.stringify(response.data));
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
}

export const getRequestToken = async (username, password) => {
    const requestToken = await axios.get(`${BASE_URL}authentication/token/new?api_key=${API_KEY}`).then(response => response.data.request_token);
    const userAuthorize = await axios.post(`${BASE_URL}authentication/token/validate_with_login?api_key=${API_KEY}`, {
        username,
        password,
        request_token: requestToken
    });
    if (userAuthorize.data.success) {
        const sessionId = await axios.post(`${BASE_URL}authentication/session/new?api_key=${API_KEY}`, {
            request_token: requestToken
        });
        return sessionId.data;
    }
}

//when we try to delete session, the response for the request is "requested resource not found", investigate.
export const deleteSession = async (sessionId) => {
    const sessionRemove = await axios.post(`${BASE_URL}authentication/session?api_key=${API_KEY}`, {
        session_id: sessionId
    });
}

//account_id and session_id are need for rating, set as favourite, add to watchlist. So it can be fetched in the following call (returned id is the account id)
//get account details: https://developers.themoviedb.org/3/account/get-account-details




// const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// // Sizes: w300, w780, w1280, original
// // w92, w154, w185, w342, w500, w780, original
// const POSTER_SIZE = 'w780';