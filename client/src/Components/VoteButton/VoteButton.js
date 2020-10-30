import React, { useState, useEffect } from 'react';
import './VoteButton.css'
import ApiService from '../../ApiService'

function VoteButton(props) {




  return (
    <>
      <div className="button-container" key={props.voteid}>
        <span className="thums-up" onClick={(event) => {
          ApiService.voteUpandDown(props.voteid, 'up')
          ApiService.getVotelist();
        }}>👍</span>
        {props.votescore}
        <span className="thums-down" onClick={
          (event) => ApiService.voteUpandDown(props.voteid, 'down')
        }>👎 </span>
      </div>
    </>
  )
}

export default VoteButton