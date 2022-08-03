import { useState } from 'react';
import './App.css';
import React from 'react';
import Inicio from './components/Inicio.jsx';
import Spinner from './elements/Spinner';

function App() {
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);

  return <div className="App">{loading ? <Spinner /> : <Inicio />}</div>;
}

export default App;
