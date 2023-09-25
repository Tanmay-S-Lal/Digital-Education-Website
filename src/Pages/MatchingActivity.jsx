import React, { useState } from 'react';
import '../Components/Styles/MatchingActivity.css';
import { NAVBAR_ACTIVITY } from './NavBar';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function MatchingActivity() {
  const initialAnimals = [
    { id: 1, name: 'Dog', image: 'https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png' },
    { id: 2, name: 'Elephant', image: 'https://static.vecteezy.com/system/resources/previews/018/871/789/original/african-elephant-on-transparent-background-png.png' },
    { id: 3, name: 'Giraffe', image: 'https://pngimg.com/d/giraffe_PNG13528.png' },
    { id: 4, name: 'Crow', image: 'data:image/jpeg;base64,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' },
    { id: 5, name: 'Lion', image: 'https://www.transparentpng.com/thumb/lion/11Y3pU-lion-amazing-image-download.png' },
    { id: 6, name: 'Cat', image: 'data:image/jpeg;base64,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' },
  ];

  const shuffledAnimalsRight = shuffleArray([...initialAnimals]);

  const [animalsLeft, setAnimalsLeft] = useState(initialAnimals);
  const [animalsRight, setAnimalsRight] = useState(shuffledAnimalsRight);
  const [matches, setMatches] = useState(new Array(initialAnimals.length).fill(false));
  const [gameOver, setGameOver] = useState(false);

  const handleInputChange = (animalId, event) => {
    if (gameOver) return;

    const inputNumber = parseInt(event.target.value);
    const updatedMatches = [...matches];

    if (!isNaN(inputNumber) && inputNumber === animalId) {
      updatedMatches[animalId - 1] = true;

      if (updatedMatches.every((match) => match)) {
        setGameOver(true);
      }
    } else {
      updatedMatches[animalId - 1] = false;
    }

    setMatches(updatedMatches);
  };

  const handlePlayAgainClick = () => {
    window.location.reload();
  };

  return (
    <>
      <NAVBAR_ACTIVITY/>
    <div className="App">
      <div className="column" id="left-column">
        <h2 className='Matching_heading'>Animals</h2>
        <div className="animal-list">
          {animalsLeft.map((animal) => (
            <div key={animal.id} className="animal-entry">
              <span className="animal-id">{animal.id}</span>
              <img
                src={animal.image}
                alt={animal.name}
                className="animal-image-vertical"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="column">
        <h2 className='Matching_heading'>Animal Names</h2>
        {animalsRight.map((animal, index) => (
          <div key={animal.id} className="option">
            <label htmlFor={`animal-${animal.id}`} className="animal-name-label">
              {animal.name}--
            </label>
            <input
              type="text"
              id={`animal-${animal.id}`}
              className='inputfield'
              placeholder="Enter"
              onChange={(event) => handleInputChange(animal.id, event)}
              disabled={gameOver || matches[animal.id - 1]}
            />
            --
            {matches[animal.id - 1] && (
              <span className="match">Match!</span>
            )}
            {!matches[animal.id - 1] && matches[animal.id - 1] !== undefined && (
              <span className="not-match">Not Match</span>
            )}
          </div>
        ))}
        {gameOver && (
          <div className="play-again">
            <button onClick={handlePlayAgainClick}>Play Again</button>
          </div>
        )}
      </div>
    </div>
  </>
  );
}

export default MatchingActivity;
