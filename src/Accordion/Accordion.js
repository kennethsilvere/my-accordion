import classes from './Accordion.module.css'
import AccordionItem from './AccorionItem/AccordionItem'

const Accordion = (props) => {
  return (
    <div className={classes.accordionContainer}>
      {props.accordionItemData.map((i, index) => (
        <AccordionItem itemData={i} key={index}/>
      ))}
    </div>
  )
}

export default Accordion
