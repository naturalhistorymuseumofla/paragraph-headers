import "./App.css";
import Navbar from "@/components/Navbar";
import {
  FullWidthCallout,
  Accordion,
  AccordionRow,
  AnimationCallout,
  CondensedCallout,
  WYSIWYG,
  CalloutSlider,
  CalloutGroup,
  TopicGridCallout,
} from "@/components";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <FullWidthCallout />
        <CalloutSlider />
        <CalloutGroup />
        <TopicGridCallout />
        <CondensedCallout />
        <AnimationCallout />
        <WYSIWYG >
          <h2 className="bc-c-themed nhm-color">WYSIWYG h2 color theme</h2>
          <h2>WYSIWYG Heading 2</h2>
          <h3>WYSIWYG Heading 3</h3>
          <h4>WYSIWYG Heading 4</h4>
        </WYSIWYG>
        <Accordion>
          <AccordionRow title="Title" />
          <AccordionRow title="Title" />
        </Accordion>
      </main>
    </>
  );
}

export default App;
