import React from 'react'
import "../css/Congrats.css"
import { Link } from "react-router-dom";

function Congrats() {
  return (
    <div className='congrats'>
        <h2>Congratulations! your pickup has been successfully scheduled</h2>
        <p>Thank you for taking a step towards making our planet green</p>
        <Link to="/">Back to home</Link>
    </div>
  )
}

export default Congrats