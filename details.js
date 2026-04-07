const API_KEY = "39cdb020";
const API_URL = "http://www.omdbapi.com/";

const params = new URLSearchParams(window.location.search);
const imdbId = params.get("id");
const detailsContainer = document.getElementById("details");

// The details page expects an IMDb id in the query string, for example `details.html?id=tt0133093`.
async function fetchDetails() {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&i=${imdbId}`);
    const data = await response.json();
    renderDetails(data);
}

// Replace the empty layout shell with the selected movie's full metadata.
function renderDetails(data) {
    detailsContainer.innerHTML = `
        <!-- Poster -->
        <img
            src="${data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/300x450?text=No+Image"}"
            alt="${data.Title}"
            class="w-64 rounded shadow-lg flex-shrink-0"
        />

        <!-- Info -->
        <div class="flex flex-col gap-4">
            <h1 class="text-white text-4xl font-bold">${data.Title}</h1>

            <div class="flex gap-3 text-sm">
                <span class="bg-red-600 text-white px-3 py-1 rounded-full">${data.Type}</span>
                <span class="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">${data.Year}</span>
                <span class="bg-zinc-800 text-yellow-400 px-3 py-1 rounded-full">IMDb ${data.imdbRating}</span>
            </div>

            <p class="text-zinc-400 leading-relaxed">${data.Plot}</p>
        </div>
    `;
}

fetchDetails();
