import React from 'react'

export default function AccordionRow({ children }) {
  return (
    <div className="bc-l-wrapper bc-l-container-fluid">
      <div className="bc-l-row">
        <div className="bc-l-col-xxs-12 bc-l-col-md-8 bc-l-col-lg-7 bc-l-col-md-offset-1">
          {React.Children.map(children, child => (
            React.cloneElement(child)
          ))}
        </div>
      </div>
    </div>
  )
}