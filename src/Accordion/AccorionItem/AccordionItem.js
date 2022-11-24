import { useState } from 'react'
import classes from './AccordionItem.module.css'
import Iteration from './Iterations/Iteration'

const AccordionItem = (props) => {
  const [expandItem, setExpandItem] = useState(props.itemData.expand)

  const onExpandItemClicked = () => {
    setExpandItem(expandItem => !expandItem)
  }

  return (
    <>
      <div className={classes.accordionItem} >
        <div onClick={onExpandItemClicked}>
          <h4>{props.itemData.title}</h4>
        </div>
        {expandItem && (
          <div>
            <Iteration iterationsData={props.itemData.iterations} />
          </div>
        )}
      </div>
    </>
  )
}

export default AccordionItem
