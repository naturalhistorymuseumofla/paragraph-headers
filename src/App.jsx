import './App.css'
import { FullWidthCallout, Accordion, AccordionRow, AnimationCallout, CondensedCallout, WYSIWYG } from '@/components'

function App() {

  return (
    <>
      <FullWidthCallout />
      <CondensedCallout />
      <AnimationCallout />
      <WYSIWYG />
      <Accordion>
        <AccordionRow title="Title" />
        <AccordionRow title="Title" />
      </Accordion>
    </>
  )
}

export default App
