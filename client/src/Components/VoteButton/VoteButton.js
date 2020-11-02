import React, { useState } from 'react';
import './VoteButton.css'
import ApiService from '../../ApiService'

function VoteButton(props) {
  console.log(props)
  // [votenumber, setVotenumber] = useState([])


  return (
    <>
      <div className="button-container" key={props.voteid}>
        <span className="thums-up" onClick={(event) => {
          props.updateVoteCount(props.voteid, 'up')
        }}>👍</span>
        {props.votescore}
        <span className="thums-down" onClick={
          (event) => props.updateVoteCount(props.voteid, 'down')
        }>👎 </span>
      </div>
    </>
  )
}

export default VoteButton