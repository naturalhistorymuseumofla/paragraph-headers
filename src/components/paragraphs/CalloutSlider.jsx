import { useStore } from '@/store'

export function CalloutSlider() {
  const isAltered = useStore((state) => state.isAltered)
  return (
    <div className="paragraph paragraph--type--callout-slider paragraph--view-mode--default bc-l-section bc-l-section--xl">
      <div className="bc-c-callout-slider bc-js-callout-slider js-scroll-reveal-trigger js-scroll-reveal-trigger--active" data-scrollama-index="6">
        <div className="bc-l-wrapper  bc-l-container-fluid u-fades-in u-fades-in--in-place">
          <div className="bc-l-row ">
            <div className="bc-l-col-xxs-12 bc-l-col-xs-9 bc-l-col-md-8 bc-l-col-lg-offset-1 ">
              <h2 className={`bc-themed-c--bold bc-f-h1 bc-u-mg-btm--s bc-u-mg-btm--m-sm bc-u-mg-btm--xl-md bc-c-callout-slider__header ${isAltered && 'h2'}`}>
                Callout Slider Title
              </h2>
            </div>
          </div>
          <div className="bc-l-row bc-c-callout-slider__row">
            <div className="bc-l-col-xxs-12 bc-l-col-xs-9 bc-l-col-md-3 bc-l-col-lg-offset-1 bc-c-callout-slider__content">
              <div>
                <p className="bc-f-caption bc-u-lh--md bc-u-mg-btm--m bc-u-mg-btm--xxl-sm bc-c-callout-slider__description">  Subtitle
                </p>
                <div className="bc-c-progress-bar__wrap">
                  <div className="bc-c-progress-bar bc-js-progress-bar__container">
                    <div className="bc-c-progress-bar__bar bc-themed-bg--bold bc-js-progress-bar" style={{ width: "75px", transform: "translateX(0px)" }}></div>
                  </div>
                  <p className="bc-f-w-bold">
                    <span className="bc-js-callout-slider__current-num">1</span> of <span className="bc-js-callout-slider__total-num">2</span>
                  </p>
                </div>
              </div>
              <div className="bc-c-callout-slider__buttons bc-c-button-group">
                <div className="bc-c-button--wrap bc-c-button bc-f-caption--bold bc-c-button--themed bc-js-callout-slider__left  bc-c-button--is-icon bc-c-button--is-icon-only">
                  <div className="button__caret">
                    <svg className="flickity-button-icon" viewBox="0 0 100 100">
                      <path d="M 10,50 L 60,100 L 65,95 L 20,50  L 65,5 L 60,0 Z" transform="  "></path>
                    </svg>
                  </div>
                  <button>
                    <span className="sr-only">Previous slide</span>
                  </button>
                </div>
                <div className="bc-c-button--wrap bc-c-button bc-f-caption--bold bc-c-button--themed bc-js-callout-slider__right  bc-c-button--is-icon bc-c-button--is-icon-only">
                  <div className="button__caret">
                    <svg className="flickity-button-icon" viewBox="0 0 100 100">
                      <path d="M 10,50 L 60,100 L 65,95 L 20,50  L 65,5 L 60,0 Z" transform="translate(100, 100) rotate(180)  "></path>
                    </svg>
                  </div>
                  <button>
                    <span className="sr-only">Next slide</span>    </button>
                </div>
              </div>
            </div>
            <div className="bc-l-col-xxs-12 bc-l-col-md-9 bc-l-col-lg-8 bc-u-pd--0">
              <div className="bc-c-callout-slider__frame bc-js-callout-slider__flickity flickity-enabled is-draggable" tabindex="0">
                <div className="flickity-viewport" style={{ height: "500.017px", touchAction: "pan-y" }}>
                  <div className="flickity-slider" style={{ left: "0px", transform: "translateX(0%)" }}>
                    <div className="bc-c-callout-slider__cell is-selected" aria-selected="true" style={{ position: 'absolute', left: "0%" }}>
                      <a className="bc-c-teaser-card bc-u-c--black bc-u-c-xs--white " href="/stories/few-simple-ingredients-rises-incredible-diversity-culture-and-countless-memories">
                        <div className="bc-c-teaser-card__image bc-aspect-ratio is-6by4">
                          <div className="bc-c-teaser-card__frame">
                            <img src="/test-nhm.jpeg" alt="" />
                          </div>
                        </div>
                        <div className="bc-c-teaser-card__text">
                          <div className="bc-c-teaser-card__text-wrap">
                            <p className="bc-f-h6 bc-u-mg-btm--xs">  Link Tile Label
                            </p>
                            <h3 className="bc-c-teaser-card__title bc-f-h3 bc-u-mg-btm--0"><span>  Link Tile Label
                            </span></h3>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="bc-c-callout-slider__cell" aria-selected="false" style={{ position: "absolute", left: "72%" }}>
                      <a className="bc-c-teaser-card bc-u-c--black bc-u-c-xs--white " href="/stories/few-simple-ingredients-rises-incredible-diversity-culture-and-countless-memories">
                        <div className="bc-c-teaser-card__image bc-aspect-ratio is-6by4">
                          <div className="bc-c-teaser-card__frame">
                            <img src="/test-nhm.jpeg" alt="" />
                          </div>
                        </div>
                        <div className="bc-c-teaser-card__text">
                          <div className="bc-c-teaser-card__text-wrap">
                            <p className="bc-f-h6 bc-u-mg-btm--xs">  Link Tile Label
                            </p>
                            <h3 className="bc-c-teaser-card__title bc-f-h3 bc-u-mg-btm--0"><span>  Link Tile Label
                            </span></h3>
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
      </div>
    </div>
  )
}