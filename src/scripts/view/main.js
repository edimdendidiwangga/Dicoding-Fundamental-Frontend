import "../components/SearchBar";
import '../components/MovieList';
import Apis from '../api/Apis';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");

    const onButtonSearchClicked = async () => {
        try {
            const results = await Apis.searchMovie(searchElement.value);
            movieListElement.className = "wrap-list";
            movieListElement.movies = results;
        } catch (message) {
            console.log('Error ' + message)
        }
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;