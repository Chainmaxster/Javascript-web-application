import { fetchAnime, fetchAnimeById } from './api.js';
import { displayAnime, displayFavorite, displayPagination } from './ui.js';

// Function to search for an anime
export async function searchAnime(query = null, page = 1) {
    query = query || document.getElementById('searchInput').value;
    if (query.trim() === "") return;

    const data = await fetchAnime(query, page);
    displayAnime(data.data);
    displayPagination(data.pagination, query);
}

// Function to add an anime to favorites
export async function addFavorite() {
    const animeId = document.getElementById('favoriteAnime').value;
    if (animeId.trim() === "") return;

    const anime = await fetchAnimeById(animeId);
    if (anime) {
        displayFavorite(anime.data);
    }
}

window.searchAnime = searchAnime;
window.addFavorite = addFavorite;
