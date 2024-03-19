# Tic Tac Toe in React

This project is a simple implementation of the classic Tic Tac Toe game built with React. It features a dynamic, interactive game board where two players can take turns marking spaces in a 3x3 grid. The application utilizes React state to manage the game's state, including the board layout, the current turn, and determining the winner. Additionally, it uses `canvas-confetti` for a celebratory animation when a player wins.

## Features

- Interactive 3x3 game board.
- Turn-based gameplay between two players (X and O).
- Win detection for three marks in a row, column, or diagonal.
- Tie detection when all spaces are filled without a winner.
- Game state preservation across browser sessions using `localStorage`.
- Celebratory confetti animation upon winning.
- Reset button to start a new game at any time.

## Technologies Used

- React (with `useState` and `useEffect` hooks)
- PropTypes for prop type verification
- `canvas-confetti` for win animations
- CSS for styling

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have npm installed:

\`\`\`bash
npm install npm@latest -g
\`\`\`

### Installation

1. Clone the repo
   \`\`\`bash
   git clone https://yourprojectlink.git
   \`\`\`
2. Install NPM packages
   \`\`\`bash
   npm install
   \`\`\`
3. Start the development server
   \`\`\`bash
   npm start
   \`\`\`

## Usage

After starting the game, players take turns clicking on the squares to place their mark (X or O). The game automatically detects a win or tie and displays a message accordingly. Use the "Start again" button to reset the game at any point.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License

Distributed under the MIT License. See \`LICENSE\` for more information.

## Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)
