import React from 'react';

import Routes from './routes';

import './Customization/Global/reset.css';
import './Customization/Global/global.css';
import './Customization/Palette/index.css';
import './Customization/Typography/index.css';
import './Components/inputs/Button/index.css';
import './Components/inputs/TextField/index.css';
import './Components/Navigation/Link/index.css';
import './Components/Layout/Container/index.css';
import './Components/Layout/Form/index.css';
import './Components/DataDisplay/Avatar/index.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
