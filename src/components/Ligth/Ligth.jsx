import React from 'react'
import './Ligth.css'
const Ligth = ({lightOn}) => {
  return (
    <div className={lightOn?'switchOn switch':"switch"}></div>
  )
}

export default Ligth
