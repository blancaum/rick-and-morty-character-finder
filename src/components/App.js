//styles
import '../styles/App.scss';
//hooks
import { useState, useEffect } from 'react';
//router
import { Routes, Route, Link } from 'react-router-dom';
//services
import callToApi from '../services/api';
import ls from '../services/localStorage';
import CharactersList from './CharactersList';

function App() {
  // VARIABLES ESTADO
  const [data, setData] = useState(ls.get('data', []));
  const [apiSuccess, setApiSuccess] = useState(ls.get('apiSuccess', false));

  // USEEFFECT
  useEffect(() => {
    if (!ls.isKeyInLocal('data') || !ls.get('apiSuccess', false)) {
      callToApi().then((response) => {
        setData(response.data);
        ls.set('data', response.data);
        setApiSuccess(response.success);
        ls.set('apiSuccess', response.success);
      });
    }
  }, []);

  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="App">
      <header>
        <h1 className="title">Rick & Morty</h1>
      </header>
      <main>
        <CharactersList data={data} />
      </main>
    </div>
  );
}

export default App;
