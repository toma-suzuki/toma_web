import './App.css';
import Title from './components/title';
import { useState } from 'react';
import { Menu } from './components/menu';

const App = () => {
  const [isOpenedTitle, setTitleState] = useState(false);
  const setIsOpenedTitle = () => {
    setTitleState(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Title
          main={'TOMA WEB'}
          sub={'Welcome to my portfolios website.'}
          setTitleState={setIsOpenedTitle}
        />
        <Menu
          isOpenedTitle={isOpenedTitle}
        />
      </header>
    </div>
  );
};

export default App;
