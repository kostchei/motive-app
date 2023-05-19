import React, { useState } from 'react';
import './App.css';

function App() {
  const [baseEthos, setBaseEthos] = useState('None');
  const [baseMoral, setBaseMoral] = useState('None');
  const [endAlignment, setEndAlignment] = useState('Neutral Neutral');

  // Declare calculateEndAlignment function here...
  const calculateEndAlignment = () => {
    let ethosResult, moralResult;
    let randomValueEthos = Math.random() * 100;
    let randomValueMoral = Math.random() * 100;

    if (baseEthos === 'None') {
      ethosResult = randomValueEthos < 30 ? 'Lawful' : randomValueEthos < 70 ? 'Neutral' : 'Chaotic';
    } else if (baseEthos === 'Lawful') {
      ethosResult = randomValueEthos < 68 ? 'Lawful' : randomValueEthos < 95 ? 'Neutral' : 'Chaotic';
    } else if (baseEthos === 'Neutral') {
      ethosResult = randomValueEthos < 16 ? 'Lawful' : randomValueEthos < 84 ? 'Neutral' : 'Chaotic';
    } else if (baseEthos === 'Chaotic') {
      ethosResult = randomValueEthos < 5 ? 'Lawful' : randomValueEthos < 32 ? 'Neutral' : 'Chaotic';
    }

    if (baseMoral === 'None') {
      moralResult = randomValueMoral < 30 ? 'Good' : randomValueMoral < 70 ? 'Neutral' : 'Evil';
    } else if (baseMoral === 'Good') {
      moralResult = randomValueMoral < 68 ? 'Good' : randomValueMoral < 95 ? 'Neutral' : 'Evil';
    } else if (baseMoral === 'Neutral') {
      moralResult = randomValueMoral < 16 ? 'Good' : randomValueMoral < 84 ? 'Neutral' : 'Evil';
    } else if (baseMoral === 'Evil') {
      moralResult = randomValueMoral < 5 ? 'Good' : randomValueMoral < 32 ? 'Neutral' : 'Evil';
    }

  return (
    <div className="App">
      <select value={baseEthos} onChange={e => setBaseEthos(e.target.value)}>
        <option value="None">None</option>
        <option value="Lawful">Lawful</option>
        <option value="Neutral">Neutral</option>
        <option value="Chaotic">Chaotic</option>
      </select>

      <select value={baseMoral} onChange={e => setBaseMoral(e.target.value)}>
        <option value="None">None</option>
        <option value="Good">Good</option>
        <option value="Neutral">Neutral</option>
        <option value="Evil">Evil</option>
      </select>

      <button onClick={calculateEndAlignment}>Calculate Alignment</button>

      <h3>End Alignment:</h3>
      <p>{endAlignment}</p>
    </div>
  );
}

export default App;