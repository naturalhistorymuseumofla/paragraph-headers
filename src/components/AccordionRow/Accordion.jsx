import { useState } from 'react';

export default function Accordion({ title, content, subTitle}) {
  const [isOpen, setOpen] = useState(false);
  const onClick= () => setOpen(!isOpen);
  return (
    <div className={`bc-c-accordion-item bc-js-accordion ${isOpen && 'bc-c-accordion--open'}`}>
    <div className="bc-c-accordion-item__header ">
      <div className="bc-c-accordion-item__container">
        <div className="bc-c-accordion-item__header__body">
          <h3 className="bc-f-base bc-u-mg-btm--xxs">
            <div className="bc-c-accordion-item__icon-wrap" aria-hidden={!isOpen}>
              <div className="bc-c-accordion-item__toggle" aria-expanded={isOpen} aria-controls="13752" onClick={onClick}>
                <div className="bc-c-accordion-item__icon">
                  <div className="bc-c-accordion-item__bar bc-c-accordion-item__bar--1 bc-themed-bg--bold"></div>
                  <div className="bc-c-accordion-item__bar bc-c-accordion-item__bar--2 bc-themed-bg--bold"></div>
                </div>
              </div>
            </div>
            <button className="bc-c-accordion-item__btn" aria-expanded="false" aria-controls="13752">
              <span className="bc-f-teaser-title">  
                {title ? title : 'Accordion Row (title)'}
              </span>
            </button>
          </h3>
          <div className="bc-themed-c--bold bc-f-h6 bc-u-mg-btm--xxs">  
            Label
          </div>
          <div className="bc-f-caption bc-u-mg-btm--xs">  
            <p>{subTitle ? subTitle : 'Subtitle'}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bc-c-accordion-item__body" aria-hidden={!isOpen} id="13752" style={{"height": isOpen ? 'auto' : '0px'}}>
      <div className="bc-c-accordion-item__container" style={{"opacity": "1"}}>
        <div className="bc-c-accordion-item__body__rule bc-themed-bg--bold" style={{"backgroundColor": "black"}}></div>
        <div className="bc-c-wysiwyg bc-c--centered ">
          <p>{content ? content : 'Content'}</p>
        </div>
      </div>
    </div>
  </div>
  )
}