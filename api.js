export const API_URL = 'https://api.jikan.moe/v4/anime';

// Function to fetch anime by search query
export async function fetchAnime(query, page = 1) {
    try {
        const response = await fetch(`${API_URL}?q=${query}&page=${page}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching anime data:', error);
        return { data: [], pagination: {} };
    }
}

// Function to fetch anime by ID
export async function fetchAnimeById(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching anime data:', error);
        return null;
    }
}
