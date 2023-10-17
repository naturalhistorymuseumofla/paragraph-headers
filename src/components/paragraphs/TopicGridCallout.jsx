import { useStore } from '@/store'

export function TopicGridCallout() {
  const isAltered = useStore((state) => state.isAltered)
  return (
    <div class="paragraph paragraph--type--topic-grid-callout paragraph--view-mode--default bc-l-section">
      <div class="js-scroll-reveal-trigger js-scroll-reveal-trigger--active" data-scrollama-index="4">
        <div class="bc-themed-bg--light u-fades-in u-fades-in--in-place ">
          <div class="bc-l-wrapper bc-l-container-fluid">
            <div class="bc-l-row bc-l-center-md">
              <div class="bc-l-col-xxs-12 bc-l-col-md-12 ">
                <div class="bc-c-topic-grid">
                  <h2 class={`bc-f-h3 bc-u-mg-btm--m ${isAltered && 'h2'}`}>
                    <p>Topic Grid Callout Title</p>
                  </h2>
                  <div id="slideshow-13733" class="bc-c-topic-grid__container bc-js-topic-slider flickity-enabled" tabindex="0">
                    <div class="flickity-viewport" style={{height: "253.941px", touchAction: "pan-y"}}><div class="flickity-slider" style={{left: "0px", transform: "translateX(20%)"}}><div class="bc-c-topic-grid__topic-card is-selected" aria-selected="true" style={{position: "absolute", left: "0%"}}>
                      <a href=" /topics/gems-minerals ">
                        <div class="bc-c-topic-grid__icon">
                          <img loading="lazy" src="/gem.png" width="191" height="191" alt="Icon of a diamond to represent gem and minerals" class="b-lazy b-loaded"/>
                        </div>
                        <div class="bc-f-h6 bc-themed-c--bold bc-c-topic-grid__label">  
                          Gems &amp; Minerals
                        </div>
                      </a>
                    </div><div class="bc-c-topic-grid__topic-card is-selected" aria-selected="true" style={{position: "absolute", left: "20%"}}>
                        <a href=" /topics/fossils ">
                          <div class="bc-c-topic-grid__icon">
                            <img loading="lazy" src="/fossil.png" width="220" height="220" alt="Icon of a hermit crab to represent fossils " class="b-lazy b-loaded"/>
                          </div>
                          <div class="bc-f-h6 bc-themed-c--bold bc-c-topic-grid__label">  
                            Fossils
                          </div>
                        </a>
                      </div><div class="bc-c-topic-grid__topic-card is-selected" aria-selected="true" style={{position: "absolute", left: "40%"}}>
                        <a href=" /topics/dinosaurs ">
                          <div class="bc-c-topic-grid__icon">
                            <img loading="lazy" src="/dinosaur.png" width="220" height="220" alt="Icon of a triceratops to represent dinosaurs" class="b-lazy b-loaded"/>
                          </div>
                          <div class="bc-f-h6 bc-themed-c--bold bc-c-topic-grid__label">  
                            Dinosaurs
                          </div>
                        </a>
                      </div></div></div></div>
                  <div id="slideshow-buttons-13733" class="bc-c-topic-grid__buttons bc-c-topic-grid__button--need-">
                    <div class="bc-c-button--wrap bc-c-button bc-f-caption--bold bc-c-button--themed bc-c-button--left bc-js-topic-slider__left  bc-c-button--is-icon bc-c-button--is-icon-only">
                      <div class="button__caret">
                        <svg class="flickity-button-icon" viewBox="0 0 100 100">
                          <path d="M 10,50 L 60,100 L 65,95 L 20,50  L 65,5 L 60,0 Z" transform="  "></path>
                        </svg>
                      </div>
                      <button>
                        <span class="sr-only">Previous topics</span>    
                      </button>
                    </div>
                    <div class="bc-c-button--wrap bc-c-button bc-f-caption--bold bc-c-button--themed bc-c-button--right bc-js-topic-slider__right  bc-c-button--is-icon bc-c-button--is-icon-only">
                      <div class="button__caret">
                        <svg class="flickity-button-icon" viewBox="0 0 100 100">
                          <path d="M 10,50 L 60,100 L 65,95 L 20,50  L 65,5 L 60,0 Z" transform="translate(100, 100) rotate(180)"></path>
                        </svg>
                      </div>
                      <button class="">
                        <span class="sr-only">Next topics</span>    
                      </button>
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