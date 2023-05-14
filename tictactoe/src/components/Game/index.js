import React, { useState, useEffect } from 'react';
import './Game.css';

const Cell = ({ value, onClick, reset }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(false);
  }, [reset]);

  const handleClick = () => {
    if (value === null) {
      onClick();
      setIsClicked(true);
    }
  };

  return (
    <div
      className={`Game-cell ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

const Game = ({ table, onClickCell, reset }) => {
  return (
    <section className="Game">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <Cell
          key={index}
          value={table[index]}
          onClick={() => onClickCell(index)}
          reset={reset}
        />
      ))}
    </section>
  );
};

export { Game, Cell };

