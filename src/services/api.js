import data from '../data/data.json';

function callToApi() {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((responseJson) => {
      let cleanResults = {
        data: [],
        success: false,
      };
      /*foto, nombre y especie, el planeta de origen, el número de
      episodios en los que aparece y si está vivo o muerto.*/

      if (responseJson.results) {
        console.log('Connection with API: success');
        cleanResults.success = true;
        cleanResults.data = responseJson.results.map((character) => {
          return {
            id: character.id,
            name: character.name,
            species: character.species,
            image: character.image,
            origin: character.origin.name,
            location: character.location.name,
            episode: character.episode,
            status: character.status,
          };
        });
      } else {
        console.log('Connection with API: ERROR. Displaying data from file.');
        cleanResults.data = data.results.map((character) => {
          return {
            id: character.id,
            name: character.name,
            species: character.species,
            image: character.image,
            origin: character.origin.name,
            location: character.location.name,
            episode: character.episode,
            status: character.status,
          };
        });
      }
      return cleanResults;
    });
}

export default callToApi;
