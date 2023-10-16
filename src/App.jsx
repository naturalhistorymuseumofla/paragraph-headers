import './App.css'
import FullWidthCallout from './components/FullWidthCallout'
import CondensedCallout from './components/CondensedCallout.jsx'
import WYSIWYG from './components/WYSIWYG.jsx'
import AnimationCallout from './components/AnimationCallout.jsx'
import AccordionRow from './components/AccordionRow/index.jsx'
import Accordion from './components/AccordionRow/Accordion'

function App() {

  return (
    <>
      <FullWidthCallout />
      <CondensedCallout />
      <AnimationCallout />
      <WYSIWYG />
      <AccordionRow>
        <Accordion title="Title" />
        <Accordion title="Title" />
      </AccordionRow>
    </>
  )
}

export default App
