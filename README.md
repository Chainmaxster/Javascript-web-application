# Javascript-web-application
Description

This single-page web application allows users to search for anime and manage a favorites list. It utilizes the Jikan API to fetch data from MyAnimeList, providing users with detailed information about their favorite anime series.

## Features

- **Anime Search**: Users can search for anime by title and view a list of results with images and synopses.
- **Favorites Management**: Users can add anime to a favorites list by entering the anime ID.
- **Responsive Design**: The application is designed to be user-friendly and visually appealing on various devices.

## Technologies Used

- **HTML**: For the basic structure of the application.
- **CSS**: For styling the application to make it visually appealing.
- **JavaScript**: For implementing functionality, including API requests and DOM manipulation.
- **Jikan API**: An unofficial MyAnimeList API used to fetch anime data.

## How to Run the Application

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/anime-search-app.git
    cd anime-search-app
    ```

2. **Open `index.html` in a Web Browser**:
    Simply open the `index.html` file in your preferred web browser to run the application.

## Code Structure

- `index.html`: The main HTML file that contains the structure of the application.
- `style.css`: The CSS file that styles the application.
- `script.js`: The JavaScript file that contains the functionality for searching and managing favorites.

## API Usage

The application uses the Jikan API to fetch anime data. The following endpoints are utilized:

- **Search Anime**:
    ```http
    GET https://api.jikan.moe/v4/anime?q={query}
    ```

- **Get Anime by ID**:
    ```http
    GET https://api.jikan.moe/v4/anime/{id}
    ```