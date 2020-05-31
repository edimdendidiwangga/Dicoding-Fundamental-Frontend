class Apis {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=b3ee4d2b00dea0683846c2310649a9dc&language=en-US&query=${keyword}`)
            .then(res => res.json())
            .then(responseJson => {
                if(responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })
            .catch(() => Promise.reject(`Oops something wrong, please check your internet connection`));
    }
}

export default Apis;