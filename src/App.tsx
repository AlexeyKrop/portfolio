import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header container">
          <Header/>
      </header>
      <main className='container'>
        <Profile />
      </main>
    </div>
  );
}

export default App;
