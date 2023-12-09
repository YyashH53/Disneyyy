import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='1935ba31ec8bb07d0e2cb7c4c17cfed3'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=1935ba31ec8bb07d0e2cb7c4c17cfed3';

//https://api.themoviedb.org/3/trending/all/day?api_key=1935ba31ec8bb07d0e2cb7c4c17cfed3
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}