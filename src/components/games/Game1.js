import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/games/Game1.css';

const Game1 = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ top: '50%', left: '50%' });

  // Start the game
  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    moveTarget();
  };

  // Move the target to a random position
  const moveTarget = () => {
    const newTop = Math.floor(Math.random() * 80) + 10; // 10-90%
    const newLeft = Math.floor(Math.random() * 80) + 10; // 10-90%
    setTargetPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };

  // Handle target click
  const handleTargetClick = () => {
    if (gameActive) {
      setScore(score + 1);
      moveTarget();
    }
  };

  // Timer effect
  useEffect(() => {
    let timer;
    if (gameActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [gameActive, timeLeft]);

  return (
    <div className="game-container">
      <div className="game-header">
        <h1>Click the Target</h1>
        <Link to="/games" className="back-button">Back to Games</Link>
      </div>

      <div className="game-info">
        <div className="score">Score: {score}</div>
        <div className="time">Time: {timeLeft}s</div>
      </div>

      <div className="game-area">
        {!gameActive && timeLeft === 30 && (
          <div className="start-screen">
            <h2>Click the Target Game</h2>
            <p>Click on the target as many times as you can in 30 seconds!</p>
            <button className="start-button" onClick={startGame}>Start Game</button>
          </div>
        )}

        {!gameActive && timeLeft === 0 && (
          <div className="end-screen">
            <h2>Game Over!</h2>
            <p>Your final score: {score}</p>
            <button className="start-button" onClick={startGame}>Play Again</button>
          </div>
        )}

        {gameActive && (
          <div 
            className="target"
            style={{ top: targetPosition.top, left: targetPosition.left }}
            onClick={handleTargetClick}
          ></div>
        )}
      </div>

      <div className="game-instructions">
        <h3>How to Play</h3>
        <p>Click on the target as quickly as you can. Each click gives you 1 point. Try to get as many points as possible before the time runs out!</p>
      </div>
    </div>
  );
};

export default Game1;
