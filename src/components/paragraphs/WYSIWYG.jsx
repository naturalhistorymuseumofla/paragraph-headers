export function WYSIWYG({ children }) {
  return (
    <div className="paragraph paragraph--type--wysiwyg paragraph--view-mode--default bc-l-section">
      <div className="bc-l-wrapper bc-l-container-fluid">
        <div className="bc-l-row">
          <div className="bc-l-col-xxs-12 bc-l-col-md-8 bc-l-col-md-offset-1 bc-l-col-lg-7">
            <div className="bc-c-wysiwyg bc-c--centered ">
              {children}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}