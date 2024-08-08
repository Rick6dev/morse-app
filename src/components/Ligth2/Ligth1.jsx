import React from 'react'
import './Ligth2.css'
const Ligth1 = ({lightOn2}) => {
  return (
      <div className={lightOn2?'switchOn2 switch':"switch"}></div>
  )
}

export default Ligth1
