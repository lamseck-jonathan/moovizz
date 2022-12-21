import axios from 'redaxios'

const apiKey = 'c5d5f6816e79fd1ac8b5416439fb5635';

export async function getPopularMovie(){
    const result = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key='
    +apiKey+
    '&language=en-US&page=1')
    return result;
}

export function getImage(path){
    return 'https://image.tmdb.org/t/p/original/'+path
}