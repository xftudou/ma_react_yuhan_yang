import React from 'react';
import { GridProvider } from './GridContext';
import Grid from './Grid';


const gridContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const App = () => (
  <GridProvider>
    <div style={gridContainerStyle}>
      <Grid />
    </div>
  </GridProvider>
);

export default App;