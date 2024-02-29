import React, { useState } from 'react';
import styles from './styles.module.css';

const TicTacToe = () => {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    // Logika sprawdzająca zwycięzcę
    // Poniżej znajdziesz przykładową prostą implementację dla 3x3
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === currentPlayer &&
        board[i][1] === currentPlayer &&
        board[i][2] === currentPlayer
      ) {
        setWinner(currentPlayer);
        break;
      }
      if (
        board[0][i] === currentPlayer &&
        board[1][i] === currentPlayer &&
        board[2][i] === currentPlayer
      ) {
        setWinner(currentPlayer);
        break;
      }
    }
    if (
      board[0][0] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][2] === currentPlayer
    ) {
      setWinner(currentPlayer);
    }
    if (
      board[0][2] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][0] === currentPlayer
    ) {
      setWinner(currentPlayer);
    }
  };

  const handleCellClick = (row, col) => {
    if (!board[row][col] && !winner) {
      const newBoard = [...board];
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);
      // checkWinner();
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  return (
    <div className={styles.ticTacToe}>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`${styles.cell} ${cell === 'X' ? styles.x : cell === 'O' ? styles.o : ''}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
      {winner && <div className={styles.winner}>{`Player ${winner} wins!`}</div>}
    </div>
  );
};

export default TicTacToe;
