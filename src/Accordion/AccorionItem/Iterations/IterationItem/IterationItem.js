import { useState } from 'react'
import classes from './IterationItem.module.css'

const IterationItem = (props) => {
  const [expandItem, setExpandItem] = useState(props.item.expand)
  const [activeBtn, setActiveBtn] = useState({index: null, confirmed: null})

  const onExpandItemClicked = () => {
    setExpandItem((expandItem) => !expandItem)
  }

  const onButtonClick = (i) => {
    console.log(`i: ${i}`)
    setActiveBtn({ index: i, confirmed: false })
  }

  const onConfirmButtonClick = (i) => {
    setActiveBtn((prevState) => {
      return { index: prevState.index, confirmed: true }
    })
  }

  return (
    <>
      <div className={classes.iterationItem}>
        <div onClick={onExpandItemClicked}>EM-{props.index}</div>
        <div onClick={onExpandItemClicked} className={classes.textCenter}>
          Iteration title
        </div>
        <div onClick={onExpandItemClicked} className={classes.textRight}>
          Selection
        </div>
        <div className={classes.statusLight}></div>

        {expandItem && (
          <div className={`${classes.interactionDiv} ${classes.iterationItem}`}>
            <button
              className={`${classes.btn} ${classes.shortBtn} ${
                activeBtn.index === 0 ? classes.greenBtn : ''
              }`}
              onClick={(e) => onButtonClick(0)}
            >
              Short
            </button>
            <button
              className={`${classes.btn} ${classes.mediumBtn} ${
                activeBtn.index === 1 ? classes.greenBtn : ''
              }`}
              onClick={(e) => onButtonClick(1)}
            >
              Medium Length
            </button>
            <button
              className={`${classes.btn} ${classes.mediumBtn} ${
                activeBtn.index === 2 ? classes.greenBtn : ''
              }`}
              onClick={(e) => onButtonClick(2)}
            >
              Very Very Very Long (UP TO 35 CHAR)
            </button>

            {activeBtn.confirmed === false && (
              <div className={classes.confirmQuestion}>
                <p>
                  This modification will overwrite four subsequent iterations.
                  Do you want to continue?
                </p>
                <div className={classes.options}>
                  <div
                    className={classes.option}
                    onClick={onConfirmButtonClick}
                  >
                    Yes
                  </div>
                  <div
                    className={classes.option}
                    onClick={onConfirmButtonClick}
                  >
                    No
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default IterationItem
