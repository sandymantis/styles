 class SearchComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div class="search-container">
                <input type="text" id="searchBox" placeholder="Enter search term">
                <button id="searchButton">Search</button>
                <button id="clearButton">Clear</button>
            </div>
            <div class="results-container">
                <table id="resultsTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            <style>
                @import url('styles.css');
            </style>
        `;

        this.searchBox = this.shadowRoot.querySelector('#searchBox');
        this.searchButton = this.shadowRoot.querySelector('#searchButton');
        this.clearButton = this.shadowRoot.querySelector('#clearButton');
        this.resultsTableBody = this.shadowRoot.querySelector('#resultsTable tbody');

        this.searchButton.addEventListener('click', () => this.search());
        this.clearButton.addEventListener('click', () => this.clear());
    }

    connectedCallback() {
        console.log('SearchComponent added to the DOM');
    }

    disconnectedCallback() {
        console.log('SearchComponent removed from the DOM');
    }

    search() {
        const searchTerm = this.searchBox.value;
        if (searchTerm.trim() === '') {
            alert('Please enter a search term.');
            return;
        }

        // Example search results data
        const results = [
            { id: 1, name: 'Example Item 1', description: 'Description for item 1' },
            { id: 2, name: 'Example Item 2', description: 'Description for item 2' },
            { id: 3, name: 'Example Item 3', description: 'Description for item 3' },
        ];

        this.displayResults(results);
    }

    clear() {
        this.searchBox.value = '';
        this.resultsTableBody.innerHTML = '';
    }

    displayResults(results) {
        this.resultsTableBody.innerHTML = results.map(result => `
            <tr>
                <td>${result.id}</td>
                <td>${result.name}</td>
                <td>${result.description}</td>
            </tr>
        `).join('');
    }
}

// Register the custom element
customElements.define('search-component', SearchComponent);

function domElementGetter() {
    return document.getElementById("search-component-container");
}

const searchComponentLifecycles = {
    bootstrap: async () => {
        console.log('Bootstrapping search component');
    },
    mount: async () => {
        const searchComponent = document.createElement('search-component');
        domElementGetter().appendChild(searchComponent);
        console.log('Mounting search component');
    },
    unmount: async () => {
        domElementGetter().innerHTML = '';
        console.log('Unmounting search component');
    }
};

export const bootstrap = searchComponentLifecycles.bootstrap;
export const mount = searchComponentLifecycles.mount;
export const unmount = searchComponentLifecycles.unmount;
