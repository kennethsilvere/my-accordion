import { useState } from 'react'
import classes from './Iteration.module.css'
import IterationItem from './IterationItem/IterationItem'

const Iteration = (props) => {
  useState()

  return (
    <>
      {props.iterationsData.map((i, index) => {
        return (
         <IterationItem item={i} index={index} key={index}/>
        )
      })}
    </>
  )
}

export default Iteration
