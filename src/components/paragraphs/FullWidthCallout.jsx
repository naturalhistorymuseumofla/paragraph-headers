import { useStore } from '@/store'

export function  FullWidthCallout({ img, linkText, subTitle, label, title }){
  const isAltered = useStore((state) => state.isAltered)
  return (
    <div className="paragraph paragraph--type--full-width-callout paragraph--view-mode--default bc-l-section">

      <div className="bc-c-fw-callout align-left bc-l-tiles--full-bleed js-scroll-reveal-trigger theme-domain bc-c-fw-callout--contained bc-c-fw-callout--mobile-gradient--no-mobile bc-c-fw-callout--mobile-gradient js-scroll-reveal-trigger--active" data-scrollama-index="0">

        <a href="https://www.google.com" rel="noopener noreferrer" target="_blank" className="bc-c-fw-callout__block-link" >
          <div className="bc-l-tile is-ancestor   bc-u-bg--trans  bc-c-fw-callout__background ">

            <div className="bc-l-tile is-parent bc-c-fw-callout__image-frame ">
              <div className="bc-l-tile is-child ">
                <div className="bc-aspect-ratio bc-u-bg--black u-fades-in u-fades-in--in-place  bc-c-fw-callout__image--is-full ">
                  <div className="contextual-region media media-image view-mode-fwc-full">
                    <picture>
                      <img src={img ? img : '/test-nhm.jpeg'} alt="outdoors at nhm in the evening" className="b-lazy b-loaded" />
                    </picture>
                  </div>
                </div>

              </div>
            </div>

            <div className="bc-c-fw-callout__overlay  bc-c-fw-callout__overlay--no-gradient-mobile    ">

              <div className="bc-l-tile is-child bc-c-fw-callout__mobile-pad">
                <div className="bc-c-fw-callout__text u-fades-in u-fades-in--from-below">

                  <p className="bc-f-h6 bc-u-mg-btm--xs  bc-u-mg-btm--s-sm bc-themed-c--bold bc-u-c-sm--white bc-c-label">
                    <span className="bc-c-label__bk bc-c-label--themed bc-themed-bg--bold bc-c-label--more-dark-sm"></span>
                    <span className="bc-c-label__text bc-u-c-sm--white"> 
                      {label ? label : "Label"}
                    </span>
                  </p>

                  <h2 className={`bc-f-h1 bc-u-mg-btm--xs bc-u-mg-btm--s-sm bc-u-c--black bc-u-c-sm--white ${isAltered && 'h2'}`}>  
                    {title ? title : "Full Width Callout Title"}
                  </h2>

                  <div className="bc-c-fw-callout__text-subtitle bc-f-base bc-f-w-book bc-u-mg-btm--m bc-u-mg-btm--l-lg  bc-u-c--black bc-u-c-sm--white">
                    <p>{subTitle ? subTitle : "Subtitle"}</p>

                  </div>
                  <div className="bc-c-fw-callout__button-container">

                    <div className="bc-c-button--wrap bc-c-button bc-f-caption--bold bc-c-button--themed bc-c-button--sm-white-filled  ">
                      <div className="bc-c-button__arrow">

                        <svg width="25px" height="19px" viewBox="0 0 27 21" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" strokeWidth="2" d="M0.2421875,9.25 L22.5,9.25" strokeLinecap="square"></path>
                          <polyline fill="none" strokeWidth="2" transform="translate(15.742188, 9.292969) rotate(-225.000000) translate(-15.742188, -9.292969) " points="9.2421875 15.7929688 9.2421875 2.79296875 22.2421875 2.79296875"></polyline>
                        </svg>
                      </div>

                      <span className="link-span">
                        {linkText ? linkText : "Link text"}
                      </span>

                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>

        </a>

      </div>
    </div>


  )

}