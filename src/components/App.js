//styles
import '../styles/App.scss';
//hooks
import { useState, useEffect } from 'react';
//router
import { Routes, Route, Link } from 'react-router-dom';
//services
import callToApi from '../services/api';

function App() {
  // VARIABLES ESTADO
  const [data, setData] = useState([]);
  const [apiSuccess, setApiSuccess] = useState(false);

  // USEEFFECT
  useEffect(() => {
    callToApi().then((response) => {
      setData(response.data);
      setApiSuccess(response.success);
    });
  }, []);

  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="App">
      <header>
        <h1 className="title">Rick & Morty</h1>
      </header>
    </div>
  );
}

export default App;
