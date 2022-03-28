const Apikey="f34794f099b698eddd79195fa13eecab";
const Requests={
fetchTrending:`/trending/all/week?api_key=${Apikey}&language=en-US`,
fetchNetflixOriginals:`discover/tv?api_key=${Apikey}&with_networks=213`,
fetchTopRatedMovies:`/movie/top_rated?api_key=${Apikey}&language=en-US}`,
fetchActionMovies:`/discover/movie?api_key=${Apikey}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${Apikey}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${Apikey}&with_genres=27`,
fetchRomanMovies:`/discover/movie?api_key=${Apikey}&with_genres=10749`,
fetchDocumentaries:`/discover/movie?api_key=${Apikey}&with_genres=99`

}
export default Requests
