import React from 'react';
import './Navbar.css'
import ApiService from '../../ApiService'

let newInput = '';

function Navbar() {
  const newvoteAdded = (event) => {
    newInput = event.target.value;
    console.log(newInput);
    //return newInput
  }

  return (
    <>
      <form className="input-form" onSubmit={() => ApiService.saveVotelist(newInput)}>
        <input type="text" onChange={newvoteAdded} />
        <input className="addbutton" type="submit" value="Submit" />
      </form>
    </>
  )

}

export default Navbar;