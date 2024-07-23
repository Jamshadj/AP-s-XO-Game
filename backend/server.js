// backend/server.js

const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const checkWinner = (board) => {
  const lines = [
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]],
    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],
    [board[0], board[4], board[8]],
    [board[2], board[4], board[6]],
  ];

  for (const line of lines) {
    if (line[0] && line[0] === line[1] && line[1] === line[2]) {
      return line[0];
    }
  }

  return null;
};

app.post('/check', (req, res) => {
  const { board } = req.body;

  const winner = checkWinner(board);
  const draw = board.every(cell => cell);

  res.send({ winner, draw });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
