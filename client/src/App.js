import React, { useState, useEffect } from 'react';
import './App.css';
import List from './Components/List/List'
import Navbar from './Components/Navbar/Navbar'
import ApiService from './ApiService'



function App() {

  const [votes, setVote] = useState([])

  useEffect(() => {
    ApiService.getVotelist()
      .then(data => setVote(data))
  }, [])

  return (
    <>
      <div className="Nav-container">
        <Navbar />
      </div>
      <div className="List-container">
        <List value={votes} />
      </div>
    </>
  );
}

export default App;
