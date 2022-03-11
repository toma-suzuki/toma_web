import React from 'react';
import './App.css';
import Title from './components/title';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Title
          title={'TOMA WEB'}
          subtitle={'Welcome to Toma\'s portfolios website.'}
        />
      </header>
    </div>
  );
}

export default App;
