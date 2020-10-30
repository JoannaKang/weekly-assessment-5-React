const BASE_URL = "http://localhost:4000";

function getVotelist() {
  return fetch(BASE_URL + '/vote')
    .then(response => response.json())
}

async function saveVotelist(newvote) {
  await fetch(BASE_URL + '/vote', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: newvote })
  })
}

async function voteUpandDown(id, dir) {
  await fetch(BASE_URL + `/vote/${id}/${dir}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
  })
}

function voteListDelete(id) {
  fetch(BASE_URL + `/vote/${id}`, {
    method: 'DELETE'
  })
}

export default {
  getVotelist,
  saveVotelist,
  voteUpandDown,
  voteListDelete
}