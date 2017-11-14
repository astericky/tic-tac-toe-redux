import { RESET_GAME, GAME_BOARD_BUTTON_CLICKED } from '../constants/actionTypes';

export const resetGame = () => ({ type: RESET_GAME });

export const updateGame = (currentPlay, xPos, yPos) => ({ 
    type: GAME_BOARD_BUTTON_CLICKED,
    payload: {
        currentPlay,
        position: { xPos, yPos }
    }
});