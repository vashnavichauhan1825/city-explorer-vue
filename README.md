# CITY EXPLORER VUE

Live Url: https://city-explorer-vue.vercel.app/

# Cities Information Explorer

This project is a web application built using the VueJs framework. It demonstrates the skills in working with APIs, handling state, managing UI components, and implementing error handling. The application uses the GeoDB Cities API to fetch and display information about cities around the world.

## Features

1. **City Information Grid**: Displays a grid listing 10 cities at a time with details such as city name, country, region, latitude, longitude, and population.
2. **Pagination**: Allows navigation to view the next set of 10 city records.
3. **View Toggle**: Provides an option to toggle between 'city cards' and 'city records'. 
   - **City Cards**: Displays cities in a card component.
   - **City Records**: Displays cities in a grid format.
4. **City Details Modal**: On clicking a city record in the grid, a modal pops up showing nearby cities, sorted by proximity, including details such as city name, distance, and region.
5. **Search Feature**: Allows users to search for cities.

## Requirements

- **API**: GeoDB Cities API from RapidAPI (https://rapidapi.com/wirefreethought/api/geodb-cities)
- **Framework**: VueJs 
- **Storemanagement**: Pinia

## Installation

1. **Clone the Repository**:
    ```bash
    git clone git@github.com:vashnavichauhan1825/city-explorer-vue.git
    cd city-explorer-vue
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Setup Environment Variables**:
    Create a `.env` file in the root directory and add your RapidAPI key and base URL:
    ```bash
    VUE_APP_API_KEY=ADD-YOUR-API-KEY
    VUE_APP_BASE_URL=https://wft-geo-db.p.rapidapi.com/v1/geo
    ```

4. **Run the Application**:
    ```bash
    npm run serve
    ```

5. **Build the Application for Production**:
    ```bash
    npm run build
    ```
