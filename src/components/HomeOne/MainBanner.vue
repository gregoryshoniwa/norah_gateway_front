<template>
  <div>
    <div class="hero-wrap style3 bg-squeeze">
      <img
        src="../../assets/images/hero/hero-shape-10.png"
        alt="Image"
        class="hero-shape-one"
      />
      <img
        src="../../assets/images/hero/hero-shape-15.png"
        alt="Image"
        class="hero-shape-two"
      />
      <img
        src="../../assets/images/hero/hero-shape-14.png"
        alt="Image"
        class="hero-shape-three"
      />
      <img
        src="../../assets/images/hero/hero-shape-11.png"
        alt="Image"
        class="hero-shape-four animationFramesTwo"
      />
      <div class="hero-slider-one">
        <carousel>
          <Slide v-for="slide in carouselItems" :key="slide.id">
            <div class="hero-slide-item">
              <div class="container">
                <div class="row gx-5 align-items-center">
                  <div class="col-md-6">
                    <div
                      class="hero-content"
                      data-speed="0.10"
                      data-revert="true"
                    >
                      <span>{{ slide.subtitle }}</span>
                      <h1>{{ slide.heading }}</h1>
                      <p>{{ slide.desc }}</p>
                      <div class="hero-btn">
                        <router-link to="/services" class="btn style1"
                          >Get Started</router-link
                        >
                        <div
                          class="play-video"
                          v-on:click="isPopupMethod(isPopup)"
                          style="cursor: pointer"
                        >
                          <span class="play-btn">
                            <i class="flaticon-play-button-arrowhead"></i>
                          </span>
                          <span class="sm-none">Watch Video</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="hero-img-wrap">
                      <img
                        src="../../assets/images/hero/hero-shape-13.png"
                        alt="Image"
                        class="hero-shape-five bounce"
                      />
                      <img
                        src="../../assets/images/hero/hero-shape-12.png"
                        alt="Image"
                        class="hero-shape-six moveHorizontal"
                      />
                      <img :src="slide.image" alt="Image" class="hero-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Pagination />
          </template>
        </carousel>
      </div>
    </div>

    <div class="popup-video" v-if="isPopup">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="popup-overlay-close" v-on:click="isPopupMethod(isPopup)">
            <div class="popup-overlay-close-line"></div>
            <div class="popup-overlay-close-line"></div>
          </div>
          <div class="play-video">
            <iframe src="https://www.youtube.com/embed/bk7McNUjWgw"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "MainBanner",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    isPopup: false,
    carouselItems: [
      {
        id: 1,
        subtitle: "Instant Money Transfer",
        heading: "Transfer Money Across World In Real Time",
        desc: "Dea of denouncing pleasure and praising pain was born and lete system, and expound the ac teachings aitems to sed quia non numquam amet sit dolor.",
        image: require("../../assets/images/hero/hero-slide-1.png"),
      },
      {
        id: 2,
        subtitle: "Online Payment System",
        heading: "Secured & Easy Online Payment Solution",
        desc: "Dea of denouncing pleasure and praising pain was born and lete system, and expound the ac teachings aitems to sed quia non numquam amet sit dolor.",
        image: require("../../assets/images/hero/hero-slide-2.png"),
      },
      {
        id: 3,
        subtitle: "Global Money Transfer",
        heading: "Move Your Money In Easy Secured Steps",
        desc: "Dea of denouncing pleasure and praising pain was born and lete system, and expound the ac teachings aitems to sed quia non numquam amet sit dolor.",
        image: require("../../assets/images/hero/hero-slide-3.png"),
      },
    ],
  }),
  methods: {
    isPopupMethod(isPopup) {
      return (this.isPopup = !isPopup);
    },
  },
});
</script>
