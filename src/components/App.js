//styles
import '../styles/App.scss';
//hooks
import { useState, useEffect } from 'react';
//router
import { Routes, Route } from 'react-router-dom';
//services
import callToApi from '../services/api';
import ls from '../services/localStorage';
import CharactersList from './CharactersList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Header from './Header';

function App() {
  // VARIABLES ESTADO
  const [data, setData] = useState(ls.get('data', []));
  const [searchName, setSearchName] = useState('');
  const [searchSpecies, setSearchSpecies] = useState([]);

  // FUNCIONES AUXILIARES
  const compareCharacterName = (character1, character2) => {
    if (character1.name < character2.name) {
      return -1;
    }
    if (character1.name > character2.name) {
      return 1;
    }
    return 0;
  };

  // USE EFFECT
  useEffect(() => {
    //Uso el Local Storage para que no se hagan tantas peticiones al servidor
    //De esta manera solo hacemos petición al servidor cada 10 recargas de la página
    debugger;
    const counter = ls.get('counterPageReload', 0);

    if (counter >= 10) {
      ls.clear();
    } else {
      ls.set('counterPageReload', counter + 1);
    }

    //Petición al servidor
    if (!ls.isKeyInLocal('data') || !ls.get('apiRickMortySuccess', false)) {
      callToApi().then((response) => {
        response.data.sort(compareCharacterName);
        setData(response.data);
        ls.clear();
        ls.set('data', response.data);
        ls.set('apiRickMortySuccess', response.success);
      });
    } else if (!ls.isKeyInLocal('apiRickMortySuccess')) {
      //limpio el Local Storage por si se ha quedado algo guardado de otra app
      ls.clear();
    }
  }, []);

  // FUNCIONES HANDLER
  const handleNameChange = (value) => {
    setSearchName(value);
  };
  const handleSpeciesChange = (value) => {
    if (searchSpecies.includes(value)) {
      searchSpecies.splice(searchSpecies.indexOf(value), 1);
      setSearchSpecies([...searchSpecies]);
    } else {
      setSearchSpecies([...searchSpecies, value]);
    }
  };

  const handleResetClick = () => {
    setSearchName('');
    setSearchSpecies([]);
  };

  //
  const getUniqueSpecies = () => {
    const species = data.map((character) => character.species);
    let uniqueSpecies = new Set();
    // eslint-disable-next-line
    species.map((eachSpecies) => {
      uniqueSpecies.add(eachSpecies);
    });

    return Array.from(uniqueSpecies);
  };

  //FILTROS
  const dataFiltered = data
    .filter((character) => {
      return character.name.toLowerCase().includes(searchName.toLowerCase());
    })
    .filter((character) => {
      if (searchSpecies.length === 0) {
        return true;
      } else {
        return searchSpecies.includes(character.species);
      }
    });

  // HTML EN EL RETURN

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Filters
                  handleNameChange={handleNameChange}
                  searchName={searchName}
                  uniqueSpecies={getUniqueSpecies()}
                  handleSpeciesChange={handleSpeciesChange}
                  searchSpecies={searchSpecies}
                  handleResetClick={handleResetClick}
                />
                <CharactersList
                  data={dataFiltered}
                  searchName={searchName}
                  searchSpecies={searchSpecies}
                />
              </>
            }></Route>

          <Route
            exact
            path="/character/:characterId"
            element={<CharacterDetail data={data} />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
