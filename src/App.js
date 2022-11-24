import './App.css'
import Accordion from './Accordion/Accordion'
import { accordionItemData } from './data/accordion-data.js'


function App() {
  

  return (
    <div className='container'>
      <Accordion accordionItemData={accordionItemData} />
    </div>
  )
}

export default App
