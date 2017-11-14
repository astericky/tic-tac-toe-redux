import { RESET_GAME, GAME_BOARD_BUTTON_CLICKED } from '../constants/actionTypes'
import checkTicTacToe from '../utils/checkTicTacToe';

const initialState = {
  board: [["", "", ""], ["", "", ""], ["", "", ""]],
  lastPlay: "O",
  isWinner: false
};

function updateBoard(state, position) {
    const { board, lastPlay } = state;
    const { xPos, yPos } = position;
    const currentPlay = lastPlay === "O" ? "X" : "O";
    const newState = [ ...board ];
    newState[yPos][xPos] = currentPlay;
    return newState;
}

function board(state = initialState, action) {
    let board;
    let { lastPlay } = state;
    switch (action.type) {
        case GAME_BOARD_BUTTON_CLICKED:
            lastPlay = lastPlay === "O" ? "X" : "O"; 
            board = updateBoard(state, action.position);
            return {
                board,
                lastPlay,
                isWinner: checkTicTacToe(board)
            };
        case RESET_GAME:
            let { board, lastPlay, isWinner } = initialState;
            return { 
                board, 
                lastPlay, 
                isWinner 
            };
        default:
            return state;
    }
}

export default board;