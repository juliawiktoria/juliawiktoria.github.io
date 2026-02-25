import React, { useState, useEffect } from 'react';
import '../../styles/CapitalQuiz.css';

const CapitalQuiz = () => {
  const [countries, setCountries] = useState([]);
  const [gamePool, setGamePool] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedMode, setSelectedMode] = useState('World');
  const [isCorrect, setIsCorrect] = useState(null);

  // Load countries data
  useEffect(() => {
    fetch('/data/countries.json')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error loading countries:', error));
  }, []);

  // Fisher-Yates shuffle
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Start game
  const startGame = () => {
    let filtered = countries;
    if (selectedMode !== 'World') {
      filtered = countries.filter(c => c.continent === selectedMode);
    }
    const shuffled = shuffleArray(filtered);
    setGamePool(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setUserAnswer('');
    setFeedback('');
    setIsCorrect(null);
    setGameStarted(true);
  };

  // Handle answer submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userAnswer.trim()) return;

    const currentCountry = gamePool[currentIndex];
    const correct = userAnswer.trim().toLowerCase() === currentCountry.capital.toLowerCase();

    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
      setFeedback('Correct! 🎉');
    } else {
      setFeedback(`Incorrect. The capital is ${currentCountry.capital}.`);
    }

    // Move to next question after delay
    setTimeout(() => {
      if (currentIndex + 1 < gamePool.length) {
        setCurrentIndex(currentIndex + 1);
        setUserAnswer('');
        setFeedback('');
        setIsCorrect(null);
      } else {
        setFeedback(`Game Over! Final Score: ${correct ? score + 1 : score}/${gamePool.length}`);
        setGameStarted(false);
      }
    }, 2000);
  };

  const currentCountry = gamePool[currentIndex];

  return (
    <div className="capital-quiz">
      <div className="quiz-container">
        <h1>Capital City Quiz</h1>

        {!gameStarted ? (
          <div className="game-setup">
            <h2>Choose Your Quiz Scope</h2>
            <select 
              value={selectedMode} 
              onChange={(e) => setSelectedMode(e.target.value)}
              className="mode-selector"
            >
              <option value="World">World</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Americas">Americas</option>
              <option value="Oceania">Oceania</option>
            </select>
            <button onClick={startGame} className="start-button" disabled={countries.length === 0}>
              {countries.length === 0 ? 'Loading...' : 'Start Quiz'}
            </button>
          </div>
        ) : (
          <div className="game-play">
            <div className="score-display">
              Score: {score} / {currentIndex + 1} | Question {currentIndex + 1} of {gamePool.length}
            </div>

            {currentCountry && (
              <>
                <div className="flag-container">
                  <img 
                    src={currentCountry.flag} 
                    alt={`Flag of ${currentCountry.country}`}
                    className="country-flag"
                  />
                </div>

                <h2 className="country-name">{currentCountry.country}</h2>

                <form onSubmit={handleSubmit} className="answer-form">
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter the capital city"
                    className="answer-input"
                    disabled={isCorrect !== null}
                    autoFocus
                  />
                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isCorrect !== null || !userAnswer.trim()}
                  >
                    Submit
                  </button>
                </form>

                {feedback && (
                  <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {feedback}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CapitalQuiz;

