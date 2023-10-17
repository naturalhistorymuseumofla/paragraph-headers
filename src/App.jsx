import './App.css'
import Navbar from '@/components/Navbar'
import { useStore } from '@/store'
import { FullWidthCallout, Accordion, AccordionRow, AnimationCallout, CondensedCallout, WYSIWYG, CalloutSlider, CalloutGroup } from '@/components'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <FullWidthCallout />
        <CalloutSlider />
        <CalloutGroup />
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
