import React, { useContext } from 'react';
import { GridContext } from './GridContext';


const Cell = ({ rowIndex, colIndex }) => {
    const { grid, toggleCell } = useContext(GridContext);

    const isOn = grid[rowIndex][colIndex];

    const handleClick = () => {
        toggleCell(rowIndex, colIndex);
    };

    const cellStyle = {
        width: '100px',
        height: '100px',
        border: '1px solid grey',
        backgroundColor: isOn ? 'black' : 'white',
        boxSizing: 'border-box',
    };

    return <div style={cellStyle} onClick={handleClick}></div>;
};

export default Cell;