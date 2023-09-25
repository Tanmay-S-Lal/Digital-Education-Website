import React from 'react'
import  loader from '../Styles/loader.gif';
function Spinner() {
  return (
    <div>
      <img src={loader} alt="" style={{background:'black',mixBlendMode:'multiply'}} />
    </div>
  )
}

export default Spinner