const API_KEY = "6fc8eb6d39ab406e36a5cf7d44e3dd0d";

//endpoints
// cada endpoint es un genero
// Ejemplo  https://api.themoviedb.org/3/parametrostrending/all/week?api_key=${API_KEY}&lenguage=en-U   

const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&lenguage=en-US`,
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&lenguage=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}