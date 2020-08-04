<template>
  <div class="root">
    <div class="floating-title">
      <title-main>
        <strong>{{ $t('profileLanding.services_title') }}</strong>
      </title-main>
      <p class="use-text-paragraph">{{ $t('profileLanding.services_desc') }}</p>
    </div>
    <div class="slider-wrap">
      <div v-if="loaded" class="carousel">
        <v-btn icon fab class="nav prev" @click="prev()">
          <i class="ion-ios-arrow-back" />
        </v-btn>
        <slick ref="slick" :options="slickOptions">
          <div class="item" v-if="isDesktop">
            <div class="item item-props-first">
              <div />
            </div>
          </div>
          <div v-for="(item, index) in services" :key="index" class="item">
            <icon-text-card :icon="item.icon" :text="item.name" :desc="item.desc" />
          </div>
          <div class="item" v-if="isDesktop">
            <div class="item item-props-last">
              <div />
            </div>
          </div>
        </slick>
        <v-btn icon fab class="nav next" @click="next()">
          <i class="ion-ios-arrow-forward" />
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script>
import Title from '../Title'
import IconTextCard from '../Cards/IconText'

export default {
  components: {
    'title-main': Title,
    IconTextCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 3,
        arrows: false,
        variableWidth: true,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      services: [
        {
          icon: 'ion-ios-color-wand',
          name: 'Frontend developer',
          desc: 'Using VueJS, React.'
        },
        {
          icon: 'ion-social-dribbble-outline',
          name: 'Backend developer',
          desc: 'Pellentesque ac  vel blandit nulla.'
        },
        {
          icon: 'ion-ios-world-outline',
          name: 'Databases',
          desc: 'Wide experience'
        }
        // {
        //   icon: 'ion-ios-camera-outline',
        //   name: 'Photo Editing',
        //   desc: 'Pellentesque ac  vel blandit nulla.'
        // },
        // {
        //   icon: 'ion-ios-snowy',
        //   name: 'Graphic Illustrations',
        //   desc: 'Pellentesque ac  vel blandit nulla.'
        // }
      ]
    }
  },
  mounted() {
    this.loaded = true
    setTimeout(() => {
      if (this.$vuetify.rtl) {
        const lastSlide = Math.floor(this.services.length - 3)
        this.$refs.slick.goTo(lastSlide)
      }
    }, 200)
  },
  methods: {
    next: function() {
      this.$refs.slick.next()
    },
    prev: function() {
      this.$refs.slick.prev()
    }
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
