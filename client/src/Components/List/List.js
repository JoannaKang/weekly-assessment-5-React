import React from 'react';
import './List.css'
import VoteButton from '../VoteButton/VoteButton'
import ApiService from '../../ApiService'

const dateFormat = require('dateformat')

function List(props) {
  return (
    props.value.map((vote) => {
      return (
        <div className="List-info" key={vote._id}>
          <VoteButton votescore={vote.score} voteid={vote._id} />
          <div className="text-area" key={vote._id}>
            <h2>{vote.title}</h2>
            <h3>Created on {dateFormat(vote.published_at, "fullDate")}</h3>
          </div>
          <i className="fas fa-trash-alt" onClick={
            (event) => ApiService.voteListDelete(vote._id)}></i>
        </div >)
    })
  )
}

export default List;
