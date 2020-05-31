class SearchBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
  
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
  
    get value() {
      return this.querySelector("#searchElement").value;
    }
  
    render() {
      this.innerHTML = `
            <style>
              .search-container {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 1em;
                margin: 1.2em auto;
                border-radius: 0.4em;
                display: flex;
                position: sticky;
                z-index: 2;
                top: 0.8em;
                background-color: azure;
              }

              .search-container > input {
                border-color: #17a2b8;
              }
            </style>
            <div class="input-group mb-3 search-container">
                <input type="text" class="form-control" id="searchElement" placeholder="Find Movie">
                <div class="input-group-append">
                    <button id="searchButtonElement" class="btn btn-outline-info" type="submit">Search</button>
                </div>
            </div>
        `;
  
      this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
  }
  
  customElements.define("search-bar", SearchBar);
  