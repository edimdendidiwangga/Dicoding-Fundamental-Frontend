class MovieItem extends HTMLElement {
    constructor() {
      super();
    }
  
    set movie(movie) {
      this._movie = movie;
      this.render();
    }
  
    get id() {
      return this._movie.id;
    }
  
    render() {
      this.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="http://image.tmdb.org/t/p/w185/${this._movie.poster_path}" alt="Poster">
            <div class="card-body">
                <h5 class="card-title">${this._movie.title}</h5>
                <p class="card-text">${this._movie.overview.charAt(100) ? this._movie.overview.substring(0, 100) : this._movie.overview}</p>
                <a href="#" class="btn btn-primary">${this._movie.vote_average}</a>
            </div>
        </div>
    `;
    }
  }
  
  customElements.define("movie-item", MovieItem);
  