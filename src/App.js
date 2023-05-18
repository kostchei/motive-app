import React, { useState } from 'react';
import './App.css';

function App() {
  const [baseEthos, setBaseEthos] = useState('None');
  const [baseMoral, setBaseMoral] = useState('None');
  const [endAlignment, setEndAlignment] = useState('Neutral Neutral');

  // Declare calculateEndAlignment function here...
  const calculateEndAlignment = () => {
    let ethosResult, moralResult;
    const randomValue = Math.random() * 100;
  
    if (baseEthos === 'None') {
      ethosResult = randomValue < 30 ? 'Lawful' : randomValue < 70 ? 'Neutral' : 'Chaotic';
    } else if (baseEthos === 'Lawful') {
      ethosResult = randomValue < 68 ? 'Lawful' : randomValue < 95 ? 'Neutral' : 'Chaotic';
    } else if (baseEthos === 'Neutral') {
      ethosResult = randomValue < 16 ? 'Lawful' : randomValue < 84 ? 'Neutral' : 'Chaotic';
    } else if (baseEthos === 'Chaotic') {
      ethosResult = randomValue < 5 ? 'Lawful' : randomValue < 32 ? 'Neutral' : 'Chaotic';
    }
  
    if (baseMoral === 'None') {
      moralResult = randomValue < 30 ? 'Good' : randomValue < 70 ? 'Neutral' : 'Evil';
    } else if (baseMoral === 'Good') {
      moralResult = randomValue < 68 ? 'Good' : randomValue < 95 ? 'Neutral' : 'Evil';
    } else if (baseMoral === 'Neutral') {
      moralResult = randomValue < 16 ? 'Good' : randomValue < 84 ? 'Neutral' : 'Evil';
    } else if (baseMoral === 'Evil') {
      moralResult = randomValue < 5 ? 'Good' : randomValue < 32 ? 'Neutral' : 'Evil';
    }
  
    setEndAlignment(ethosResult + ' ' + moralResult);
  };

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