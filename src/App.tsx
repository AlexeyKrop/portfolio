import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import MySkills from "./Components/MySkills/MySkills";
import MyWorks from "./Components/MyWorks/MyWorks";
import Contacts from "./Components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <header className="App-header container">
          <Header/>
      </header>
      <main className='container'>
        <Profile />
        <MySkills />
        <MyWorks />
        <Contacts/>
      </main>
    </div>
  );
}

export default App;
