import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import '../styles/Games.css';

const Games = () => {
  const gamesData = [
    {
      id: 1,
      title: "Click the Target",
      description: "Test your reflexes! Click on the moving target as many times as you can in 30 seconds.",
      image: "https://via.placeholder.com/600x400/CC8751/FFFFFF?text=Click+the+Target",
      path: "/games/game1",
      technologies: ["React", "JavaScript"]
    },
    {
      id: 2,
      title: "Oddle",
      description: "Test your color perception by finding the rectangle with a slightly different color.",
      image: "https://via.placeholder.com/600x400/BE6E64/FFFFFF?text=Oddle",
      path: "/games/oddle",
      technologies: ["React", "JavaScript", "Color Perception"]
    },
    {
      id: 3,
      title: "Coming Soon",
      description: "More games are in development and will be added soon!",
      image: "https://via.placeholder.com/600x400/40464F/FFFFFF?text=Coming+Soon",
      comingSoon: true,
      technologies: ["React", "JavaScript"]
    }
  ];

  const gameRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    gameRefs.current.forEach((game) => {
      if (game) observer.observe(game);
    });

    return () => {
      gameRefs.current.forEach((game) => {
        if (game) observer.unobserve(game);
      });
    };
  }, []);

  return (
    <section className="games section">
      <div className="container">
        <h2 className="section-title">My Games</h2>
        <p className="games-intro">
          Welcome to my games collection! Click on a game to play it directly in your browser.
        </p>

        <div className="games-grid">
          {gamesData.map((game, index) => (
            <div
              key={game.id}
              className="game-card"
              ref={el => gameRefs.current[index] = el}
            >
              <div className="game-image">
                <img src={game.image} alt={game.title} />
                {!game.comingSoon && (
                  <div className="game-play-button">
                    <Link to={game.path} className="play-button">
                      <FontAwesomeIcon icon={faGamepad} /> Play
                    </Link>
                  </div>
                )}
                {game.comingSoon && (
                  <div className="coming-soon-overlay">
                    <span>Coming Soon</span>
                  </div>
                )}
              </div>
              <div className="game-info">
                <h3 className="game-title">{game.title}</h3>
                <p className="game-description">{game.description}</p>
                <div className="game-tech">
                  {game.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
