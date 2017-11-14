import React from "react";
import { connect } from "react-redux";
import Button from "antd/lib/button";
import { updateGame } from "../actions";

import "../../css/GameBoard.css";

const GameBoard = ({ board, lastPlay, hasWinner, handleBoardButtonClicked }) => {
  let key = 0;
  let buttons = board.map((row, rowIndex) =>
    row.map((item, itemIndex) => (
      <Button
        key={key++}
        type={item ? "default" : "primary"}
        disabled={hasWinner}
        onClick={() => handleBoardButtonClicked(itemIndex, rowIndex)}
      >{item || '\0'}</Button>
    ))
  );
  return <div className="game-board">{buttons}</div>;
};

const mapStateToProps = ({ board, lastPlay, hasWinner }) => ({
  board,
  lastPlay,
  hasWinner
});

const mapDistachToProps = dispatch => ({
  handleBoardButtonClicked: (xPos, yPos) => {
    dispatch(updateGame({xPos, yPos}));
  }
});

export default connect(mapStateToProps, mapDistachToProps)(GameBoard);
