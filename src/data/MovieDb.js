import axios from 'redaxios'

const apiKey = 'c5d5f6816e79fd1ac8b5416439fb5635';

const language = 'fr'

export async function getPopularMovie(){
    const result = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key='
    +apiKey+
    '&language=en&page=1')
    return result;
}

export async function getTopRatedMovie(){
    const result = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key='
    +apiKey+
    '&language='
    +language+
    '&page=1')
    return result;
}

export async function getDetailsMovie(movie_id){
    const result = await axios.get('https://api.themoviedb.org/3/movie/'
    +movie_id+
    '?api_key='
    +apiKey+
    '&language='
    +language)
    return result;
}

export async function getSimilarMovies(movie_id){
    const result = await axios.get('https://api.themoviedb.org/3/movie/'
    +movie_id+
    '/similar?api_key='
    +apiKey+
    '&language='
    +language)
    return result;
}

export async function getMoviesWithGenres(id){
    const result = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key='
    +apiKey+
    '&with_genres='
    +id+
    '&language=en')
    return result;
}



export async function getGenres(){
    const result = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key='
    +apiKey+
    '&language='
    +language)
    return result;
}

export async function searchMovies(keyword){
    const result = await axios.get('https://api.themoviedb.org/3/search/movie?api_key='
    +apiKey+
    '&query='
    +keyword+
    '&language=en')
    return result;
}

export function getPosterImagePm(path){
    return 'https://image.tmdb.org/t/p/w342/'+path
}

export function getPosterImageGm(path){
    return 'https://image.tmdb.org/t/p/original/'+path
}

export function getBackdropImage(path){
    return 'https://image.tmdb.org/t/p/w1280/'+path
}