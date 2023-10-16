export default function AnimationCallout({ title }) {
  return (
    <div className="paragraph paragraph--type--animation-callout paragraph--view-mode--default bc-l-section">
      <div className="js-scroll-reveal-trigger js-scroll-reveal-trigger--active" data-scrollama-index="5">
        <div style={{"backgroundColor": "#00A5C5"}} className="bc-c-callout-thin u-fades-in u-fades-in--in-place  ">

          <div className="bc-l-container-fluid bc-l-wrapper">
            <div className="bc-l-row">
              <div className="bc-c-callout-thin__image-wrap bc-l-col-xxs-12 bc-l-col-xs-6 bc-l-col-sm-5 bc-l-col-xs-offset-1 bc-l-last-xs">
                <div className="bc-c-callout-thin__image bc-aspect-ratio is-6by4">
                  <div className="bc-u-disp-none-max-md bc-e-gif-wrap">
                    <img loading="lazy" src="/snail.gif" width="900" height="600" alt="San Gabriel chestnut snail animation" className="b-lazy b-loaded"/>
                  </div>
                  <div className="bc-u-disp-none-md">
                    <img loading="lazy" src="//:0" width="3751" height="2500" alt="San Gabriel chestnut snail illustration" className="b-lazy" data-sr c="/snail.gif"/>
                  </div>
                </div>
              </div>

              <div className="bc-c-callout-thin__text-wrap bc-l-col-xxs-12 bc-l-col-xs-5 bc-l-col-sm-6 bc-l-col-lg-offset-1 bc-l-col-lg-5">
                <div className="bc-c-callout-thin__text u-fades-in u-fades-in--from-below u-reveal-delay--3 ">
                  <a className=" " href="https://www.google.com" style={{"color": "#FFFFFF"}}>
                    <div className="bc-f-section-title bc-u-mg-btm--xs bc-u-mg-btm--m-sm">
                      {title ? title : "Animation Callout (Title)"}
                    </div>
                    <div className="bc-c-link-arrow bc-f-caption--bold  ">
                      <div className="bc-c-link-arrow__text " style={{"color": "#FFFFFF"}}>
                        Link text
                        <div className="bc-c-link-arrow__arrow ">
                          <svg width="25px" height="19px" viewBox="0 0 27 21" version="1.1">
                            <path fill="none" strokeWidth="2" d="M0.2421875,9.25 L22.5,9.25" strokeLinecap="square" style={{"stroke": "#FFFFFF"}}></path>
                            <polyline fill="none" strokeWidth="2" transform="translate(15.742188, 9.292969) rotate(-225.000000) translate(-15.742188, -9.292969) " points="9.2421875 15.7929688 9.2421875 2.79296875 22.2421875 2.79296875" style={{"stroke": "#FFFFFF"}}></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}