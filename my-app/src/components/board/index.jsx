import React from 'react';
import  Square  from "../square/index.jsx";
import { useSelector } from 'react-redux';

import "./index.css";
export default function Board() {
    const boardState = useSelector((state) => state.board.board);
    const count = useSelector((state) => state.board.count);

    const squares = [];

    for (var i = 0; i < 2; i ++){
        for (var j = 0; j < 2; j ++){
            squares.push(<Square key={i + "_" + j} symbol={boardState[i][j]} x={i} y={j}/>); 
        }
    }

    return (
        <div className="board-container">
            <span className="title">Count: {count}</span>
            <div className="board">
                {squares}
            </div>
        </div>
    );
}