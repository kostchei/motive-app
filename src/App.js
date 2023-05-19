import React, { useState } from 'react';
import './App.css';

function App() {
  const [baseEthos, setBaseEthos] = useState('None');
  const [baseMoral, setBaseMoral] = useState('None');
  const [endAlignment, setEndAlignment] = useState('Neutral Neutral');
  const [piety, setPiety] = useState(0);
  const [factionalReputation, setFactionalReputation] = useState(0);
  const [selectedPairs, setSelectedPairs] = useState([]);

  const virtuesVices = [
    { virtue: "Chaste", vice: "Lustful" },
    { virtue: "Energetic", vice: "Lazy" },
    { virtue: "Forgiving", vice: "Vengeful" },
    { virtue: "Generous", vice: "Selfish" },
    { virtue: "Honest", vice: "Deceitful" },
    { virtue: "Just", vice: "Arbitrary" },
    { virtue: "Merciful", vice: "Cruel" },
    { virtue: "Modest", vice: "Proud" },
    { virtue: "Prudent", vice: "Reckless" },
    { virtue: "Temperate", vice: "Indulgent" },
    { virtue: "Trusting", vice: "Suspicious" },
    { virtue: "Valorous", vice: "Cowardly" }
  ];

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

  let pietyValue = Math.abs(2 * Math.floor(Math.random() * 20 + 1) - 20);
  let factionalReputationValue = Math.abs(2 * Math.floor(Math.random() * 50 + 1) - 50);

  setPiety(pietyValue);
  setFactionalReputation(factionalReputationValue);

  setEndAlignment(ethosResult + ' ' + moralResult);

  let pairsCopy = [...virtuesVices];
  const selected = [];

  switch (moralResult) {
    case 'Good':
      for(let i = 0; i < 2; i++) { // select two virtues
        let index = Math.floor(Math.random() * pairsCopy.length);
        selected.push({
          ...pairsCopy[index], 
          virtueValue: Math.floor(Math.random() * 6) + 15,
        });
        pairsCopy.splice(index, 1);
      }
      // select one vice from the remaining pairs
      let index = Math.floor(Math.random() * pairsCopy.length);
      selected.push({
        ...pairsCopy[index], 
        viceValue: Math.floor(Math.random() * 6) + 15
      });
      break;
    case 'Neutral':
      for(let i = 0; i < 2; i++) { // select one virtue and one vice
        let index = Math.floor(Math.random() * pairsCopy.length);
        if (i === 0) {
          selected.push({
            ...pairsCopy[index], 
            virtueValue: Math.floor(Math.random() * 6) + 15,
          });
        } else {
          selected.push({
            ...pairsCopy[index], 
            viceValue: Math.floor(Math.random() * 6) + 15
          });
        }
        pairsCopy.splice(index, 1);
      }
      break;
    case 'Evil':
      for(let i = 0; i < 2; i++) { // select two vices
        let index = Math.floor(Math.random() * pairsCopy.length);
        selected.push({
          ...pairsCopy[index], 
          viceValue: Math.floor(Math.random() * 6) + 15
        });
        pairsCopy.splice(index, 1);
      }
      // select one virtue from the remaining pairs
      index = Math.floor(Math.random() * pairsCopy.length);
      selected.push({
        ...pairsCopy[index], 
        virtueValue: Math.floor(Math.random() * 6) + 15,
      });
      break;
    default:
      setSelectedPairs([]);
  }

  setSelectedPairs(selected);
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

      <h3>Character Traits:</h3>
      <ul>
      {selectedPairs.map((pair, index) => (
  <div key={index}>
    {pair.virtueValue !== undefined && 
      <p>{pair.virtue}: {pair.virtueValue}</p>
    }
    {pair.viceValue !== undefined && 
      <p>{pair.vice}: {pair.viceValue}</p>
    }
  </div>
))}
      </ul>
      
      <h3>Piety:</h3>
      <p>{piety}</p>

      <h3>Factional Reputation:</h3>
      <p>{factionalReputation}</p>
    </div>
  );
}
export default App;