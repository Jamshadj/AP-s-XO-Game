import React, { useState } from "react";
import axios from 'axios';
import { Board } from "./components/Board";
import { ResetButton } from "./components/ResetButton";
import { ScoreBoard } from "./components/ScoreBoard";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import './App.css';

const App = () => {
  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleBoxClick = (boxIdx) => {
    if (gameOver || board[boxIdx]) return;

    const updatedBoard = board.map((value, idx) => (idx === boxIdx ? (xPlaying ? "X" : "O") : value));
    setBoard(updatedBoard);

    axios.post('http://localhost:4000/check', { board: updatedBoard })
      .then(response => {
        const { winner, draw } = response.data;
        if (winner) {
          setMessage(`Player ${winner} wins!`);
          if (winner === "O") {
            setScores(prevScores => ({ ...prevScores, oScore: prevScores.oScore + 1 }));
          } else {
            setScores(prevScores => ({ ...prevScores, xScore: prevScores.xScore + 1 }));
          }
          setGameOver(true);
          setOpen(true);
        } else if (draw) {
          setMessage("It's a draw!");
          setGameOver(true);
          setOpen(true);
        } else {
          setXPlaying(!xPlaying);
        }
      });
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setMessage("");
    setOpen(false);
  };

  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
      <Dialog className="dialog" open={open} onClose={resetBoard}>
        <DialogTitle>Game Over</DialogTitle>
        <DialogContent>
          {message}
        </DialogContent>
        <DialogActions>
          <Button onClick={resetBoard} color="primary">Play again</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
