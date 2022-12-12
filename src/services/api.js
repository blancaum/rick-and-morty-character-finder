import data from '../data/data.json';

function callToApi() {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((responseJson) => {
      let cleanResults = {
        data: [],
        success: false,
      };
      if (responseJson.results) {
        console.log('Conection with API: success');
        cleanResults.success = true;
        cleanResults.data = responseJson.results.map((character) => {
          return {
            id: character.id,
            name: character.name,
            species: character.species,
            image: character.image,
          };
        });
      } else {
        console.log('Conection with API: ERROR. Displaying data from file.');
        cleanResults.data = data.results.map((character) => {
          return {
            id: character.id,
            name: character.name,
            species: character.species,
            image: character.image,
          };
        });
      }
      return cleanResults;
    });
}

export default callToApi;
