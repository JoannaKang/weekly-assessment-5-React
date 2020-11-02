import React, { useState, useEffect } from 'react';
import './App.css';
import List from './Components/List/List'
import Navbar from './Components/Navbar/Navbar'
import ApiService from './ApiService'



function App() {

  const [votelist, setVotelist] = useState([])

  useEffect(() => {
    ApiService.getVotelist()
      .then(data => setVotelist(data))
  }, [])


  const deleteVotelist = async (id) => {
    await ApiService.voteListDelete(id);
    ApiService.getVotelist()
      .then(data => setVotelist(data));
  }

  const updateVoteCount = async (id, votetype) => {
    await ApiService.voteUpandDown(id, votetype)
    ApiService.getVotelist()
      .then(data => setVotelist(data));
  }

  if (votelist === []) {
    return null;
  } else if (votelist === undefined) {
    return null
  }

  return (
    <>
      <div className="Nav-container">
        <Navbar />
      </div>
      <div className="List-container">
        <List
          value={votelist}
          deletevotelist={deleteVotelist}
          updateVoteCount={updateVoteCount} />
      </div>
    </>
  );
}

export default App;
