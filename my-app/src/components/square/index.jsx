import React from 'react';
import { useDispatch } from 'react-redux';

import "./index.css";
export default function Square(props) {

    const dispatch = useDispatch();
    return (
        <div className="square" onClick={() => dispatch(
            {
                type: 'BoardClick',
                x: props.x,
                y: props.y,
            }
        )} style={{ backgroundColor: props.symbol === 'X' ? 'black' : 'white' }}>
        </div>
    );
}