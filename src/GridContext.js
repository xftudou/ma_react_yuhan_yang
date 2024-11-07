import React, { createContext, useState } from 'react';

export const GridContext = createContext();

export const GridProvider = ({ children }) => {
    const [grid, setGrid] = useState([
        [false, false],
        [false, false],
    ]);

    const toggleCell = (row, col) => {
        const newGrid = grid.map((gridRow, rowIndex) =>
            gridRow.map((cell, colIndex) => {
                if (rowIndex === row && colIndex === col) {
                    return !cell;
                }
                return cell;
            })
        );
        setGrid(newGrid);
    };

    return (
        <GridContext.Provider value={{ grid, toggleCell }}>
            {children}
        </GridContext.Provider>
    );
};