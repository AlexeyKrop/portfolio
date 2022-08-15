import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import MySkills from "./Components/MySkills/MySkills";
import MyWorks from "./Components/MyWorks/MyWorks";
import Contacts from "./Components/Contacts/Contacts";
import HireForWork from "./Components/HireForWork/HireForWork";
import Footer from "./Components/Footer/Footer";
import {GitHubView} from "./Components/GitHubView/GitHubView";



function App() {
  return (

    <div className="App">
      <header className="App-header container">
          <Header/>
      </header>
      <main>
        <Profile />
        <MySkills />
        {/*<GitHubView />*/}
        <MyWorks />
        <Contacts/>
        <HireForWork />
      </main>
      <footer className='container'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
