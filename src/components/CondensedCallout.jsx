export default function CondensedCallout({ title, subTitle, img }) {
  return (
    <div className="paragraph paragraph--type--condensed-callout paragraph--view-mode--default bc-l-section">
      <div className="theme-domain js-scroll-reveal-trigger js-scroll-reveal-trigger--active nhm-theme align-left" data-scrollama-index="2">
        <div className="bc-c-callout-thin u-fades-in u-fades-in--in-place bc-themed-bg--bold ">
          <div className="bc-l-container-fluid bc-l-wrapper">
            <div className="bc-l-row">
              <div className="bc-c-callout-thin__image-wrap bc-l-col-xxs-12 bc-l-col-xs-6 bc-l-col-sm-5 bc-l-col-xs-offset-1 bc-l-last-xs">
                <div className="bc-c-callout-thin__image bc-aspect-ratio is-6by4">
                  <picture>
                    <img src={img ? img : '/test-nhm.jpeg'} alt="Placeholder Content" className="b-lazy b-loaded"/>
                  </picture>
                </div>
              </div>
              <div className="bc-c-callout-thin__text-wrap bc-l-col-xxs-12 bc-l-col-xs-5 bc-l-col-sm-6 bc-l-col-lg-offset-1 bc-l-col-lg-5">
                <div className="bc-c-callout-thin__text u-fades-in u-fades-in--from-below u-reveal-delay--3 ">
                  <a className="bc-u-c--white " href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                    <div className="bc-f-section-title bc-u-mg-btm--xs bc-u-mg-btm--m-sm">
                      {title ? title : 'Condensed Callout Title'}
                    </div>
                    <div className="bc-u-c--white bc-f-body  bc-u-mg-btm--xs bc-u-mg-btm--m-sm">
                      <p>{subTitle ? subTitle : 'Subtitle'}</p>
                    </div>

                    <div className="bc-c-link-arrow bc-f-caption--bold  bc-u-c--white">
                      <div className="bc-c-link-arrow__text ">
                        Link Text
                        <div className="bc-c-link-arrow__arrow bc-u-stroke--white">

                          <svg width="25px" height="19px" viewBox="0 0 27 21" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" strokeWidth="2" d="M0.2421875,9.25 L22.5,9.25" strokeLinecap="square" style={{"stroke": "white"}}></path>
                            <polyline fill="none" strokeWidth="2" transform="translate(15.742188, 9.292969) rotate(-225.000000) translate(-15.742188, -9.292969) " points="9.2421875 15.7929688 9.2421875 2.79296875 22.2421875 2.79296875" style={{"stroke": "white"}}></polyline>
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