import { useState } from 'react';

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
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner === 'Draw') {
    status = "It's a draw!";
  } else if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
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

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function redo(){
    if (currentMove < history.length - 1) {
      jumpTo(currentMove + 1);
    }
    else {
      alert("No more moves to redo");
    }
  }

  function undo() {
    if (currentMove > 0) {
      jumpTo(currentMove - 1);
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
            Click an empty square to place your mark (X starts).
            <br />
            Get 3 in a row—horizontally, vertically, or diagonally—to win.
            <br />
            Use undo/redo to review or change moves.
          </div>
        </div>
      </div>
      <div className="max-w-md p-4 bg-blue-100 text-gray-800 rounded-lg shadow-md text-center">
        <strong>React useState in Action:</strong>
        <br />
        This game uses <code className="bg-gray-200 px-1 rounded">useState</code> hooks to remember:
        <br />
        • Game history (all board states)
        <br />
        • Current move position
        <br />
        React automatically re-renders when state changes, keeping the UI in sync!
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
}
