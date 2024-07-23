# AP's XO Game

AP's XO Game is a simple Tic Tac Toe game built with React for the frontend and Node.js for the backend. The game allows two players to take turns placing Xs and Os on a 3x3 grid, checks for a winner after each move, and announces the game result.

## Features

- Two-player gameplay
- Displays the current player's turn
- Announces the winner or a draw
- Provides a reset button to start a new game
- Displays a modal with the game result
- Maintains score for each player

## Dependencies

- `@emotion/react`: v11.4.1
- `@emotion/styled`: v11.3.0
- `@mui/material`: v5.0.2
- `axios`: v0.21.1
- `react`: v17.0.2
- `react-dom`: v17.0.2
- `react-scripts`: v4.0.3
- `express`: v4.17.1
- `cors`: v2.8.5

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Jamshadj/AP-s-XO-Game.git

2. Install frontend dependencies:
    ```sh
    cd frontend
    npm install
    ```

3. Install backend dependencies:
    ```sh
    cd backend
    npm install
    ```

## Running the Application

1. Start the backend server:
    ```sh
    cd backend
    npm run dev
    ```

2. Start the frontend application:
    ```sh
    cd ..
    npm start
    ```

3. Open [http://localhost:3000](http://localhost:3000) to view the game in your browser.


## Overall Flow

1. **Frontend (React):**
    - The game is displayed on a 3x3 grid.
    - Players take turns clicking on the grid to place their X or O.
    - The `App` component maintains the state of the board, the current player, and the game status.
    - The `handleBoxClick` function handles the game logic, including updating the board and checking for a winner or draw by sending the board state to the backend server.

2. **Backend (Node.js):**
    - The backend server uses Express to handle API requests.
    - The `/check` endpoint receives the board state from the frontend, checks for a winner or draw, and responds with the game result.
    - The game result is then displayed in a modal on the frontend using MUI's `Dialog` component.

Sample game play video

https://drive.google.com/file/d/1OIikgCM2jWob1bkdfBnSKoaFKAwKTyvb/view?usp=sharing

