import { useStore } from '@/store'

export function CalloutGroup() {
  const isAltered = useStore((state) => state.isAltered)
  return (
    <div class={`theme-domain js-scroll-reveal-trigger js-scroll-reveal-trigger--active`} data-scrollama-index="7">
      <div class="bc-c-callout-group u-fades-in u-fades-in--in-place bc-c-callout-group--has-bk bc-themed-bg--light">
        <div class="u-fades-in u-fades-in--from-below">
          <div class="bc-l-container-fluid bc-l-wrapper">
            <div class="bc-l-row bc-l-bottom-xs bc-c-section-header">
              <div class="bc-l-col-xxs-12 bc-l-col-md-7 bc-l-col-md-offset-1 bc-l-col-xl-8">
                <h2 class={`bc-f-h1 bc-themed-c--bold  bc-u-mg-btm--s bc-u-mg-btm--m-sm ${isAltered && 'h2'}`}>
                  Callout Group Title
                </h2>
                <p class="bc-u-mg-btm--s bc-u-mg-btm--m-sm">
                  Subtitle
                </p>
              </div>
              <div class="bc-l-col-xxs-12 bc-l-col-md-3 bc-l-col-xl-2">
                <div class="bc-l-row bc-l-start-xs bc-l-end-md bc-l-text-right-md">
                  <div class="bc-l-col-xxs-12 u-fades-in u-fades-in--from-left u-reveal-delay--3">
                    <div class="bc-c-link-arrow bc-f-caption--bold  bc-themed-c--bold">
                      <div class="bc-c-link-arrow__text bc-c-link-arrow__text--link">
                        <a href="https://www.google.com">Link text</a>
                        <div class="bc-c-link-arrow__arrow bc-themed-stroke--bold">
                          <svg width="25px" height="19px" viewBox="0 0 27 21" version="1.1">
                            <path fill="none" strokeWidth="2" d="M0.2421875,9.25 L22.5,9.25" strokeLinecap="square" style={{ stroke: "black" }}></path>
                            <polyline fill="none" strokeWidth="2" transform="translate(15.742188, 9.292969) rotate(-225.000000) translate(-15.742188, -9.292969)" points="9.2421875 15.7929688 9.2421875 2.79296875 22.2421875 2.79296875" style={{ stroke: "black" }}></polyline>
                          </svg>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bc-l-container-fluid bc-l-wrapper">
            <div class="bc-l-row bc-l-center-xs">
              <div class="bc-l-col-xxs-12 bc-l-col-md-10">
                <div class="bc-c-callout-group__featured">
                  <div class="bc-c-fw-callout bc-l-tiles--full-bleed js-scroll-reveal-trigger bc-c-fw-callout--featured-callout js-scroll-reveal-trigger--active" data-scrollama-index="8">
                    <a href="https://www.google.com" class="bc-c-fw-callout__block-link ">
                      <div class="bc-l-tile is-ancestor   bc-u-bg--trans  bc-c-fw-callout__background ">
                        <div class="bc-l-tile is-parent bc-c-fw-callout__image-frame ">
                          <div class="bc-l-tile is-child ">
                            <div class="bc-aspect-ratio bc-u-bg--black u-fades-in u-fades-in--in-place  bc-c-fw-callout__image--is-full ">
                              <picture>
                                <img src="/test-nhm.jpeg" alt="Toyon on Los Vaqueros Watershed Miwok Trail" class="b-lazy b-loaded" />
                              </picture>
                            </div>
                          </div>
                        </div>
                        <div class="bc-c-fw-callout__overlay    bc-c-fw-callout__overlay--bottom  ">
                          <div class="bc-l-tile is-child bc-c-fw-callout__mobile-pad">
                            <div class="bc-c-fw-callout__text u-fades-in u-fades-in--from-below">

                              <p class="bc-f-h6 bc-u-mg-btm--xs  bc-u-mg-btm--s-sm bc-themed-c--bold bc-u-c-sm--white bc-c-label">
                                <span class="bc-c-label__bk bc-c-label--themed bc-themed-bg--bold bc-c-label--more-dark-sm"></span>
                                <span class="bc-c-label__text bc-u-c-sm--white">  Featured Label
                                </span>
                              </p>

                              <h3 class="bc-f-h2 bc-u-mg-btm--xs bc-u-mg-btm--s-sm bc-u-mg-btm--xs bc-u-mg-btm--s-sm  bc-u-c--black bc-u-c-sm--white ">
                                Featured Title
                              </h3>
                              <div class="bc-c-fw-callout__text-subtitle bc-f-base bc-f-w-book bc-u-mg-btm--m bc-u-mg-btm--l-lg  bc-u-c--black bc-u-c-sm--white">
                                Featured Subtitle
                              </div>
                              <div class="bc-c-fw-callout__button-container">
                                <div class="bc-c-button--wrap bc-c-button bc-f-caption--bold bc-c-button--themed bc-c-button--sm-white-filled  ">
                                  <div class="bc-c-button__arrow">
                                    <svg width="25px" height="19px" viewBox="0 0 27 21" version="1.1">
                                      <path fill="none" strokeWidth="2" d="M0.2421875,9.25 L22.5,9.25" strokeLinecap="square"></path>
                                      <polyline fill="none" strokeWidth="2" transform="translate(15.742188, 9.292969) rotate(-225.000000) translate(-15.742188, -9.292969)" points="9.2421875 15.7929688 9.2421875 2.79296875 22.2421875 2.79296875"></polyline>
                                    </svg>
                                  </div>
                                  <span class="link-span">
                                    Link text
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
                <div class="bc-c-callout-group__carousel">
                  <div class="bc-c-link-tile-group bc-js-link-tile-carousel">
                    <div class="bc-c-link-tile-group__frame flickity-enabled is-draggable" tabindex="0">
                      <div class="flickity-viewport" style={{ height: "364.08px", touchAction: "pan-y" }}>
                        <div class="flickity-slider" style={{ left: "0px", transform: "translateX(0%)" }}>
                          <div class="bc-c-link-tile-group__item is-selected" aria-selected="true" style={{ position: "absolute", left: "0%" }}>
                            <article class="bc-c-link-tile ">
                              <a href="https://www.google.com" class="bc-u-c--black bc-c-link-tile__link-container">
                                <div class="bc-l-row">
                                  <div class="bc-l-col-xxs-12 ">
                                    <div class="bc-e-image bc-u-mg-btm--s bc-c-link-tile__image bc-aspect-ratio is-6by4 bc-u-bg--black">
                                      <div class="bc-c-link-tile__frame">
                                        <picture>
                                          <img src="/test-nhm.jpeg" alt="Toyon on Los Vaqueros Watershed Miwok Trail" class="b-lazy b-loaded" />
                                        </picture>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="bc-l-col-xxs-12 ">
                                    <div class="bc-c-link-tile__content">
                                      <p class="bc-f-h6 bc-themed-c--bold bc-u-mg-btm--xs">  Link Tile Label
                                      </p>
                                      <h3 class="bc-c-link-tile__content-title bc-f-teaser-title bc-u-mg-btm--xs">
                                        Link Tile Title
                                      </h3>
                                      <p class="bc-c-link-tile__content-description bc-f-w-book bc-u-c--grey-med-text bc-u-mg-btm--s bc-u-lh--md">
                                        Link Tile Subtitle
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </article>
                          </div>
                          <div class="bc-c-link-tile-group__item" aria-selected="false" style={{ position: "absolute", left: "33.69%" }}>
                            <article class="bc-c-link-tile ">
                              <a href="https://www.google.com" class="bc-u-c--black bc-c-link-tile__link-container">
                                <div class="bc-l-row">
                                  <div class="bc-l-col-xxs-12 ">
                                    <div class="bc-e-image bc-u-mg-btm--s bc-c-link-tile__image bc-aspect-ratio is-6by4 bc-u-bg--black">
                                      <div class="bc-c-link-tile__frame">
                                        <picture>
                                          <img src="/test-nhm.jpeg" alt="Toyon on Los Vaqueros Watershed Miwok Trail" class="b-lazy b-loaded" />
                                        </picture>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="bc-l-col-xxs-12 ">
                                    <div class="bc-c-link-tile__content">
                                      <p class="bc-f-h6 bc-themed-c--bold bc-u-mg-btm--xs">
                                        Link Tile Label
                                      </p>
                                      <h3 class="bc-c-link-tile__content-title bc-f-teaser-title bc-u-mg-btm--xs">
                                        Link Tile Title
                                      </h3>
                                      <p class="bc-c-link-tile__content-description bc-f-w-book bc-u-c--grey-med-text bc-u-mg-btm--s bc-u-lh--md">
                                        Link Tile Subtitle
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </article>
                          </div>
                          <div class="bc-c-link-tile-group__item" aria-selected="false" style={{ position: "absolute", left: "67.38%" }}>
                            <article class="bc-c-link-tile ">
                              <a href="https://www.google.com" class="bc-u-c--black bc-c-link-tile__link-container">
                                <div class="bc-l-row">
                                  <div class="bc-l-col-xxs-12 ">
                                    <div class="bc-e-image bc-u-mg-btm--s bc-c-link-tile__image bc-aspect-ratio is-6by4 bc-u-bg--black">
                                      <div class="bc-c-link-tile__frame">
                                        <picture>
                                          <img src="/test-nhm.jpeg" alt="Toyon on Los Vaqueros Watershed Miwok Trail" class="b-lazy b-loaded" />
                                        </picture>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="bc-l-col-xxs-12 ">
                                    <div class="bc-c-link-tile__content">
                                      <p class="bc-f-h6 bc-themed-c--bold bc-u-mg-btm--xs">
                                        Link Tile Label
                                      </p>
                                      <h3 class="bc-c-link-tile__content-title bc-f-teaser-title bc-u-mg-btm--xs">
                                        Link Tile Title
                                      </h3>
                                      <p class="bc-c-link-tile__content-description bc-f-w-book bc-u-c--grey-med-text bc-u-mg-btm--s bc-u-lh--md">
                                        Link Tile Subtitle
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </article>
                          </div>
                        </div>
                      </div>
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