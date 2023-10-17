import './App.css'
import Navbar from '@/components/Navbar'
import { useStore } from '@/store'
import { FullWidthCallout, Accordion, AccordionRow, AnimationCallout, CondensedCallout, WYSIWYG } from '@/components'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <FullWidthCallout />
        <CondensedCallout />
        <AnimationCallout />
        <WYSIWYG />
        <Accordion>
          <AccordionRow title="Title" />
          <AccordionRow title="Title" />
        </Accordion>
      </main>
    </>
  )
}

export default App
