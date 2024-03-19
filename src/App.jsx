import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";
import confetti from "canvas-confetti";


const TURNS = {
  X: "X",
  O: "O",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index)
  }

  return <div onClick={handleClick} className={className}>{children}</div>;
};

Square.propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  updateBoard: PropTypes.func,
  index: PropTypes.number,
};

const winnerCombos = [
  [0, 1, 2], //horizontal
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], //vertical
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], //diagonal
  [2, 4, 6],
]

function App() {
  const [board, setBoard] = useState(() => {
    const savedBoard = window.localStorage.getItem("board");
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null);
  

  });

  const [turn, setTurn] = useState(()=>{
    const savedTurn = window.localStorage.getItem("turn");
    return savedTurn ? savedTurn : TURNS.X;
  });

  const [winner, setWinner] = useState(()=>{
    return null
  }); //null no hay ganador,  false, hay un empate

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  const checkWinner = (board) => {
    for(const combo of winnerCombos){
      const [a, b, c] = combo;
      if(board[a] && board[a] === board[b] && board[a] === board[c]){
        return board[a];
      }

    }
    return null

  }

  const updateBoard = (index) => {

    if(board[index] !== null || winner!=null) return;

    const newBoard = [...board];
    newBoard[index]=turn;
    setBoard(newBoard);
    const newTurn = ((turn === TURNS.X) ? TURNS.O : TURNS.X);
    setTurn(newTurn);

    //check winner
    const newWinner  = checkWinner(newBoard);
    if(newWinner){
      
      setWinner(newWinner);
      confetti({
        particleCount: 150
      });
      
    }
    else if(newBoard.every((square) => square !== null)) {
      setWinner(false);
    } 
    //Save the current game state
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn); 
    window.localStorage.setItem("winner", newWinner);
    console.log(newWinner);
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Start again</button>
      <section className="game">
        {board.map((element, index) => {
          return <Square key={index} index={index} updateBoard={updateBoard}>{element}</Square>;
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

        {
          winner !==null && (
            <section className="winner">
              <div className="text">
                <h2>
                  {winner === false ? "It's a tie" : `Winner:  ${winner}`} 
                </h2>
                <header>
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGame}>Start again</button>
                </footer>
              </div>
            </section>
          )
        }

    </main>
  );
}

export default App;
