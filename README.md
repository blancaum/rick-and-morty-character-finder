# 🥒🚀👽Rick & Morty Character Finder👽🚀🥒
### Author✒️: Blanca Ubis Martínez

## 📋Project description📋

This project gets the characters of [Rick and Morty from an API](https://rickandmortyapi.com/documentation/#get-all-characters) and lets you see their information.
Also, you can filter these characters by two criteria: by name and by species.
If you click on any character, you can access an individual page for each of them that shows more details.

## 🧩Components🧩

The estructure of this project is divided by components:

- `App.js`: main component that controls all the others and the main logic of the app.
- `CharacterDetail.js`: component that renders the individual page for each character with all their details.
- `CharacterItem.js`: component that renders the basic information for one character.
- `CharactersList.js`: component that renders the characters on the main page.
- `FilterByName.js`: component that renders the input where the user can write a filter for the character name.
- `FilterBySpecies.js`: component that renders the checkboxes that the user can click filter by species.
- `Filters.js`: component that renders all the filters in the page.
- `Header.js`: component that renders the header image and title.
- `PickleImages.js`: component that imports the images used when we show an error page to the user.
- `Reset.js`: component that renders a button that resets the filters inputs.

## 🌐Services🌐

To make our app functional, we need two services:

- `api.js`: contains the function that calls the API and returns the data from the server.
- `localStorage.js`: contains functions necessary to manage the local storage in a easier way.

## ✨React✨

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run githubpages`

Builds the app for production to the `docs` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
