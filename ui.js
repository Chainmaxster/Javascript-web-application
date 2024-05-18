// Function to display anime list
export function displayAnime(animeList) {
    const animeListDiv = document.getElementById('animeList');
    animeListDiv.innerHTML = '';
    if (animeList.length === 0) {
        animeListDiv.innerHTML = '<p>No results found</p>';
        return;
    }
    animeList.forEach(anime => {
        const animeItem = document.createElement('div');
        animeItem.className = 'anime-item';
        animeItem.innerHTML = `
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
            <div>
                <h3>${anime.title}</h3>
                <p>${anime.synopsis || 'No synopsis available.'}</p>
            </div>
        `;
        animeListDiv.appendChild(animeItem);
    });
}

// Function to display favorite anime list
export function displayFavorite(anime) {
    const favoriteListDiv = document.getElementById('favoriteList');
    const favoriteItem = document.createElement('div');
    favoriteItem.className = 'anime-item';
    favoriteItem.innerHTML = `
        <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
        <div>
            <h3>${anime.title}</h3>
        </div>
    `;
    favoriteListDiv.appendChild(favoriteItem);
}

// Function to display pagination
export function displayPagination(pagination, query) {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';

    if (pagination.current_page > 1) {
        const prevButton = document.createElement('button');
        prevButton.innerText = 'Previous';
        prevButton.onclick = () => searchAnime(query, pagination.current_page - 1);
        paginationDiv.appendChild(prevButton);
    }

    if (pagination.current_page < pagination.last_visible_page) {
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next';
        nextButton.onclick = () => searchAnime(query, pagination.current_page + 1);
        paginationDiv.appendChild(nextButton);
    }
}
