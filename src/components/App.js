//styles
import '../styles/App.scss';
//hooks
import { useState, useEffect } from 'react';
//router
import { Routes, Route, Navigate } from 'react-router-dom';
//services
import callToApi from '../services/api';
import ls from '../services/localStorage';
import CharactersList from './CharactersList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

function App() {
  // VARIABLES ESTADO
  const [data, setData] = useState(ls.get('data', []));
  const [searchName, setSearchName] = useState('');

  // USEEFFECT
  useEffect(() => {
    if (!ls.isKeyInLocal('data') || !ls.get('apiRickMortySuccess', false)) {
      callToApi().then((response) => {
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

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="App">
      <header>
        <h1 className="title">Rick & Morty</h1>
      </header>
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
                />
                <CharactersList data={data} searchName={searchName} />
              </>
            }></Route>

          <Route path="/redirect" element={<Navigate to="/" />} />

          {/* <Route
            exact
            path="/character/:characterId"
            element={
              data.length < 1 ? (
                <Navigate to="/" />
              ) : (
                <CharacterDetail data={data} />
              )
            }></Route> */}

          <Route
            exact
            path="/character/:characterId"
            element={<CharacterDetail data={data} />}></Route>

          {/* <Route
            exact
            path="/character/:characterId/:characterName/:characterSpecies/:characterOrigin/:characterLocation/:characterEpisodes/:characterStatus"
            element={<CharacterDetail />}></Route> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
