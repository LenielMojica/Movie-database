const API_KEY = "39cdb020";
const API_URL = "http://www.omdbapi.com/";

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const clearButton = document.getElementById("clear-button");
const clearFavoritesButton = document.getElementById("clear-favorites");
const viewFavoritesButton = document.getElementById("view-favorites");
const moviesGrid = document.getElementById("movies-grid");
const FAVORITES_STORAGE_KEY = "favorites";
const LEGACY_FAVORITES_STORAGE_KEY = "favoritos";

// Keep reading the old Spanish key so existing saved favorites still show up.
function getFavorites() {
    const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    const legacyFavorites = localStorage.getItem(LEGACY_FAVORITES_STORAGE_KEY);
    return JSON.parse(savedFavorites || legacyFavorites) || [];
}

// Write to both keys so older and newer versions of the app stay in sync.
function saveFavorites(favorites) {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    localStorage.setItem(LEGACY_FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
}

function toggleClearFavoritesButton(shouldShow) {
    clearFavoritesButton.classList.toggle("hidden", !shouldShow);
}

function createMovieCard(movie) {
    const card = document.createElement("div");
    const favorites = getFavorites();
    const isFavorite = favorites.includes(movie.imdbID);
    const favoriteColor = isFavorite ? "text-yellow-400" : "text-zinc-200";

    card.classList.add(
        "relative", "bg-zinc-800", "rounded-xl", "overflow-hidden",
        "shadow-lg", "flex", "flex-col", "cursor-pointer",
        "hover:scale-105", "transition-transform", "duration-200"
    );

    card.innerHTML = `
        <div class="relative">
            <img
                src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}"
                alt="${movie.Title}"
                class="w-full h-72 object-cover"
            >
            <button
                class="favorite-button absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 ${favoriteColor} shadow-md backdrop-blur-sm transition hover:scale-110 hover:bg-black/80 hover:text-yellow-400"
                aria-label="Toggle favorite"
                data-id="${movie.imdbID}"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="h-5 w-5">
                    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321 1.01l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.386a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.98 20.562a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557L3.04 10.407a.562.562 0 01.321-1.01l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z"/>
                </svg>
            </button>
        </div>
        <div class="p-3">
            <p class="text-white font-semibold text-sm truncate">${movie.Title}</p>
            <p class="text-sm text-gray-400 mb-3">${movie.Year} | ${movie.Type}</p>
            <p class="text-amber-400 font-medium text-sm">View details</p>
        </div>
    `;

    card.addEventListener("click", () => {
        window.location.href = `details.html?id=${movie.imdbID}`;
        searchInput.value = "";
    });

    // Stop the card click from firing so the favorite button can toggle in place.
    const favoriteButton = card.querySelector(".favorite-button");
    favoriteButton.addEventListener("click", (event) => {
        event.stopPropagation();

        const movieId = event.currentTarget.dataset.id;
        let favoritesList = getFavorites();

        if (favoritesList.includes(movieId)) {
            favoritesList = favoritesList.filter((id) => id !== movieId);
            favoriteButton.classList.remove("text-yellow-400");
            favoriteButton.classList.add("text-zinc-200");
        } else {
            favoritesList.push(movieId);
            favoriteButton.classList.remove("text-zinc-200");
            favoriteButton.classList.add("text-yellow-400");
        }

        saveFavorites(favoritesList);
    });

    moviesGrid.appendChild(card);
}

function showNoFavoritesMessage() {
    const emptyCard = document.createElement("div");
    emptyCard.classList.add("bg-zinc-800", "rounded", "overflow-hidden", "shadow-lg", "flex", "flex-col", "col-span-full");
    emptyCard.innerHTML = `
        <div class="p-4">
            <p class="text-white font-semibold text-center">There are no favorites right now.</p>
        </div>
    `;
    moviesGrid.appendChild(emptyCard);
}

function showEmptySearchMessage() {
    const emptyCard = document.createElement("div");
    emptyCard.classList.add("bg-zinc-800", "rounded", "overflow-hidden", "shadow-lg", "flex", "flex-col", "col-span-full");
    emptyCard.innerHTML = `
        <div class="p-4">
            <p class="text-white font-semibold text-center">Please enter a search term.</p>
        </div>
    `;
    moviesGrid.appendChild(emptyCard);
}

async function searchMovies() {
    try {
        // OMDb returns a lightweight search list here; details are fetched on the next page.
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchInput.value)}`);
        const data = await response.json();

        moviesGrid.innerHTML = "";

        if (!data.Search) {
            showEmptySearchMessage();
            return;
        }

        data.Search.forEach((movie) => createMovieCard(movie));
    } catch (error) {
        console.log("There was an error while fetching movies.", error);
    }
}

async function loadFavoriteMovies() {
    const favorites = getFavorites();
    moviesGrid.innerHTML = "";

    if (favorites.length === 0) {
        showNoFavoritesMessage();
        toggleClearFavoritesButton(false);
        return;
    }

    // Fetch each saved title by IMDb id so favorite cards have full movie data.
    for (const id of favorites) {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&i=${id}`);
        const data = await response.json();
        createMovieCard(data);
    }

    toggleClearFavoritesButton(true);
}

searchButton.addEventListener("click", () => {
    if (searchInput.value.trim() === "") {
        if (moviesGrid.children.length === 0) {
            showEmptySearchMessage();
        }
        return;
    }

    searchMovies();
    clearButton.classList.remove("hidden");
});

clearButton.addEventListener("click", () => {
    searchInput.value = "";
    clearButton.classList.add("hidden");
    moviesGrid.innerHTML = "";
    searchInput.focus();
});

clearFavoritesButton.addEventListener("click", () => {
    saveFavorites([]);
    moviesGrid.innerHTML = "";
    showNoFavoritesMessage();
    toggleClearFavoritesButton(false);
});

viewFavoritesButton.addEventListener("click", () => {
    loadFavoriteMovies();
});
