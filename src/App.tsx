import React, { useState } from 'react'; // Agrega { useState } al import de React
import Card from "./Card";
import './App.css'

function App() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Cambia de favoriteColor a value
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { input1, input2 } = formData;

    if (input1.trim().length < 3 || input1.startsWith(' ')) {
      setErrorMessage('Por favor chequea que la información sea correcta');
      return;
    }

    if (input2.length < 6) {
      setErrorMessage('Por favor chequea que la información sea correcta');
      return;
    }

    setErrorMessage('');
  };

  return (
    <div className="App">
      <h2>Elige un color</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="input1" placeholder="Ingresa tu nombre" onChange={handleInputChange}/>
        <input type="text" name="input2" placeholder="Color favorito" onChange={handleInputChange}/>
        <button type="submit">Enviar</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {Object.keys(formData).length > 0 && <Card formData={formData} />}
    </div>
  );
}

export default App;
