import React from 'react';
import Routes from './components/Routes';
import { Route} from 'react-router-dom';
import AdminView from './components/adminView/AdminView';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
