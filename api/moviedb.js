import axios from 'axios';
import {apiKey} from '../constants';

const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;

//dynamic endpoint movie details

export const movieDetailsEndpoint = id=>  `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
export const movieCreditsEndpoint = id=>  `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
export const similarMoviesEndpoint = id=>  `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;


export const image500 = path=> path? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = path=> path? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = path=> path? `https://image.tmdb.org/t/p/w185${path}` : null;

export const fallBackMoviePoster = 'https://www.shutterstock.com/image-photo/post-apocalyptic-woman-boy-weapons-outdoors-1564277902';
export const fallBackPersonImage  = 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const apiCall = async (endpoint, params) => {
    const options = {
        method : 'GET',
        url : endpoint,
        params : params? params:{}
    }

    try {
        const response = await axios.request(options);
        return response.data;
    } catch(error) {
        console.log(error);
        return {};
    }
}

 export const fetchTrendingMovies =  () => {
    return apiCall(trendingMoviesEndpoint);
 }

 export const fetchUpcomingMovies =  () => {
    return apiCall(upcomingMoviesEndpoint);
 }

 export const fetchTopRatedMovies =  () => {
    return apiCall(topRatedMoviesEndpoint);
 }

 export const fetchMoviesDetails = id => {
    return apiCall(movieDetailsEndpoint(id));
 }

 export const fetchMovieCredits = id => {
    return apiCall(movieCreditsEndpoint(id));
 }

 export const fetchSimilarMovies = id => {
    return apiCall(similarMoviesEndpoint(id));
 }