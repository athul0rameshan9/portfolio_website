import { useState, useEffect, useCallback } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button
      className="w-16 h-16 bg-gray-800 text-yellow-400 text-2xl font-bold rounded-md shadow-md border-2 border-gray-700 hover:border-yellow-400 transition flex items-center justify-center"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i] || !xIsNext) {
      return; // Prevent human from playing when it's computer's turn
    }
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner === 'Draw') {
    status = "It's a draw!";
  } else if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = xIsNext ? 'Your turn (X)' : "Computer's turn (O)...";
  }

  return (
    <>
      <div className="flex justify-center items-center flex-10 px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow mb-4">
        {status}
      </div>
      <div className="board-row flex space-x-4 mb-2">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row flex space-x-4 mb-2">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row flex space-x-4 mb-2">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// Minimax Algorithm Implementation
function minimax(squares, depth, isMaximizing) {
  const winner = calculateWinner(squares);
  
  // Terminal states
  if (winner === 'O') return 10 - depth; // Computer wins (prefer shorter paths)
  if (winner === 'X') return depth - 10; // Human wins (avoid, prefer longer paths)
  if (winner === 'Draw') return 0; // Draw
  
  if (isMaximizing) {
    // Computer's turn (O) - maximize score
    let maxEval = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) {
        squares[i] = 'O';
        const evaluation = minimax(squares, depth + 1, false);
        squares[i] = null;
        maxEval = Math.max(maxEval, evaluation);
      }
    }
    return maxEval;
  } else {
    // Human's turn (X) - minimize score
    let minEval = Infinity;
    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) {
        squares[i] = 'X';
        const evaluation = minimax(squares, depth + 1, true);
        squares[i] = null;
        minEval = Math.min(minEval, evaluation);
      }
    }
    return minEval;
  }
}

function getBestMove(squares) {
  let bestMove = -1;
  let bestValue = -Infinity;
  
  for (let i = 0; i < 9; i++) {
    if (squares[i] === null) {
      squares[i] = 'O';
      const moveValue = minimax(squares, 0, false);
      squares[i] = null;
      
      if (moveValue > bestValue) {
        bestMove = i;
        bestValue = moveValue;
      }
    }
  }
  
  return bestMove;
}

export default function Game() {
  // useState hook to store array of all game states (board configurations)
  // Enables time travel - undo/redo functionality by keeping history of moves
  const [history, setHistory] = useState([Array(9).fill(null)]);
  
  // useState hook to track current position in game history
  // Determines which move we're viewing and whose turn it is
  const [currentMove, setCurrentMove] = useState(0);
  
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = useCallback((nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }, [history, currentMove]);

  // Computer move effect
  useEffect(() => {
    if (!xIsNext && !calculateWinner(currentSquares)) {
      const timer = setTimeout(() => {
        const bestMove = getBestMove(currentSquares.slice());
        if (bestMove !== -1) {
          const nextSquares = currentSquares.slice();
          nextSquares[bestMove] = 'O';
          handlePlay(nextSquares);
        }
      }, 500); // Small delay for better UX
      
      return () => clearTimeout(timer);
    }
  }, [xIsNext, currentSquares, handlePlay]);

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function redo(){
    if (currentMove < history.length - 1) {
      // Redo by 2 moves to maintain player turn (skip computer move)
      const nextMove = Math.min(currentMove + 2, history.length - 1);
      jumpTo(nextMove);
    } else {
      alert("No more moves to redo");
    }
  }

  function undo() {
    if (currentMove > 0) {
      // Undo by 2 moves to maintain player turn (undo both computer and player moves)
      const nextMove = Math.max(currentMove - 2, 0);
      jumpTo(nextMove);
    } else {
      alert("No more moves to undo");
    }
  }

  const moves = history.map((squares, move,) => {
    if (move === 0) {
      return (
        <button
          key={move}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow"
          onClick={() => jumpTo(move)}
        >
          Go to game start
        </button>
      );
    }
    return null;
  });

  return (
    <div className="game min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8">
      <div className="flex flex-col md:flex-row gap-8 bg-gray-100 rounded-lg shadow-lg p-8 mb-6">
        <div className="game-board flex flex-col items-center justify-center">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info flex flex-col items-center md:items-start bg-gray-800 p-6 rounded-lg shadow-md min-w-[220px]">
          <ol className="space-y-2 w-full mb-4">
            {moves}
          </ol>
          <div className="flex gap-4 w-full mb-2">
            <button
              className="flex-1 px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow"
              onClick={undo}
            >
              undo
            </button>
            <button
              className="flex-1 px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow"
              onClick={redo}
            >
              redo
            </button>
          </div>
          <div className="p-2 bg-yellow-100 text-gray-800 rounded shadow text-center w-full text-sm">
            <strong>How to Play:</strong>
            <br />
            You are X, computer is O. Click an empty square to make your move.
            <br />
            The computer uses minimax algorithm - it's unbeatable!
            <br />
            Use undo/redo to review moves.
          </div>
        </div>
      </div>
      <div className="max-w-md p-4 bg-blue-100 text-gray-800 rounded-lg shadow-md text-center">
        <strong>Minimax Algorithm in Action:</strong>
        <br />
        useState hooks remember all the board positions throughout the game.
        <br />
        The computer evaluates all possible moves and chooses the optimal one.
        <br />
        • +10 points for computer win
        <br />
        • -10 points for human win
        <br />
        • 0 points for draw
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
    }
  }
  
  if (!squares.includes(null)) {
    return 'Draw';
  }
  return null;
}
