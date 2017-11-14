import { combineReducers } from 'redux'
import { RESET_GAME, GAME_BOARD_BUTTON_CLICKED } from '../constants/actionTypes'
import checkTicTacToe from '../utils/checkTicTacToe';

const defaultState = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

function updateBoard(state, payload) {
    const {currentPlay, position: { xPos, yPos }} = payload;
    const newState = [ ...state ];
    newState[yPos][xPos] = currentPlay;
    return newState;
}

function board(state = defaultState, action) {
    switch (action.type) {
        case GAME_BOARD_BUTTON_CLICKED:
            return updateBoard(state, action.payload);
        case RESET_GAME:
            return [ ...defaultState ];
        default: 
            return state;
    }
}

function lastPlay(state = 'O', action) {
    const { type, lastPlay } = action;
    switch (type) {
        case GAME_BOARD_BUTTON_CLICKED:
            return lastPlay === 'O' ? 'X' : 'O';
        case RESET_GAME:
            return 'O'
        default:
            return state;
    } 
}

function isWinner(state = false, action) {
    switch (action.type) {
        case GAME_BOARD_BUTTON_CLICKED:
            return true;
        case RESET_GAME:
            return false;
        default:
            return state;
    } 
}


export default combineReducers({
    board,
    lastPlay,
    isWinner
})