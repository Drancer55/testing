import React from 'react';
import './App.css';
import Welcome from '../src/Welcome/Welcome';
import Points from '../src/Points/Points';
// Página inicial de React con el nombre original 'App'
function App() {
  return (
    <div className='container'>
      <div className='currentUser'>
        {/* Componente que da la bienvenida con diversas opciones */}
        <Welcome />
      </div>
      <div className='point'>
        {/* Componente con algunos puntos de interés del sitio web */}
        <Points/>
      </div>
    </div>
  );
}

export default App;
