import React, { useContext } from 'react';
import { GridContext } from './GridContext';
import Cell from './Cell';

const Grid = () => {
    const { grid } = useContext(GridContext);

    const onCount = grid.flat().filter(Boolean).length;

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 100px)',
        gridTemplateRows: 'repeat(2, 100px)',
    };

    return (
        <div>
            <h1>Count: {onCount}</h1>
            <div style={gridStyle}>
                {grid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            rowIndex={rowIndex}
                            colIndex={colIndex}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Grid;