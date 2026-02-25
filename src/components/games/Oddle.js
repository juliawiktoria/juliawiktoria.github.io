import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/games/Oddle.css';

const Oddle = () => {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [grid, setGrid] = useState([]);
  const [oddIndex, setOddIndex] = useState(null);
  const [gridSize] = useState(5); // Consistent 5x5 grid
  const [difficulty, setDifficulty] = useState(40); // Starting difficulty (higher = easier to spot)

  // Generate a random color in RGB format
  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
  };

  // Generate a slightly different color
  const generateOddColor = (baseColor, difficulty) => {
    // Randomly choose which component(s) to modify
    const component = Math.floor(Math.random() * 3); // 0 = r, 1 = g, 2 = b

    let { r, g, b } = baseColor;

    // Modify the chosen component
    switch (component) {
      case 0:
        r = Math.min(255, Math.max(0, r + difficulty));
        break;
      case 1:
        g = Math.min(255, Math.max(0, g + difficulty));
        break;
      case 2:
        b = Math.min(255, Math.max(0, b + difficulty));
        break;
      default:
        break;
    }

    return { r, g, b };
  };

  // Convert RGB object to CSS color string
  const rgbToString = (color) => {
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
  };

  // Initialize a new round
  const initializeRound = () => {
    const baseColor = generateRandomColor();
    const oddColor = generateOddColor(baseColor, difficulty);

    // Generate random position for the odd color
    const newOddIndex = Math.floor(Math.random() * (gridSize * gridSize));
    setOddIndex(newOddIndex);

    // Create grid with colors
    const newGrid = Array(gridSize * gridSize).fill().map((_, index) => {
      return {
        id: index,
        color: index === newOddIndex ? oddColor : baseColor
      };
    });

    setGrid(newGrid);
  };

  // Start the game
  const startGame = () => {
    setScore(0);
    setRound(0);
    setGameActive(true);
    setGameOver(false);
    setDifficulty(40); // Start with easier difficulty
    initializeRound();
  };

  // Handle tile click
  const handleTileClick = (index) => {
    if (!gameActive) return;

    if (index === oddIndex) {
      // Correct choice
      setScore(score + 1);
    }

    // Move to next round
    const nextRound = round + 1;
    setRound(nextRound);

    if (nextRound >= 10) {
      // Game over after 10 rounds
      setGameActive(false);
      setGameOver(true);
    } else {
      // Gradually decrease the difficulty with each round
      // Start at 40 (easy) and end at 8 (hard)
      const newDifficulty = Math.max(8, Math.floor(40 - (nextRound * 3.5)));
      setDifficulty(newDifficulty);

      initializeRound();
    }
  };

  // Initialize the first round when the game starts
  useEffect(() => {
    if (gameActive) {
      initializeRound();
    }
  }, [gameActive]);

  return (
    <div className="oddle-container">
      <div className="oddle-header">
        <h1>Oddle</h1>
        <Link to="/games" className="back-button">Back to Games</Link>
      </div>

      <div className="oddle-info">
        <div className="oddle-score">Score: {score}/10</div>
        <div className="oddle-round">Round: {round + 1}/10</div>
      </div>

      <div className="oddle-game-area">
        {!gameActive && !gameOver && (
          <div className="oddle-start-screen">
            <h2>Oddle - Color Perception Game</h2>
            <p>Find the rectangle with a slightly different color. You have 10 rounds to test your color perception!</p>
            <button className="oddle-start-button" onClick={startGame}>Start Game</button>
          </div>
        )}

        {gameOver && (
          <div className="oddle-end-screen">
            <h2>Game Over!</h2>
            <p>Your final score: {score}/10</p>
            <p className="oddle-rating">
              {score <= 3 ? "Keep practicing! Color perception takes time to develop." :
               score <= 6 ? "Good job! You have decent color perception." :
               score <= 9 ? "Excellent! You have great color perception." :
               "Perfect! You have exceptional color perception!"}
            </p>
            <button className="oddle-start-button" onClick={startGame}>Play Again</button>
          </div>
        )}

        {gameActive && (
          <div
            className="oddle-grid"
            style={{
              gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
              gridTemplateRows: `repeat(${gridSize}, 1fr)`
            }}
          >
            {grid.map((tile, index) => (
              <div
                key={index}
                className="oddle-tile"
                style={{ backgroundColor: rgbToString(tile.color) }}
                onClick={() => handleTileClick(index)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="oddle-instructions">
        <h3>How to Play</h3>
        <p>Look carefully at the grid and find the rectangle with a slightly different color. Click on it to score a point. The game gets progressively harder with each round!</p>
      </div>
    </div>
  );
};

export default Oddle;
