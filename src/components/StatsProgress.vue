<template>
  <div :class="'stats-progress ' + type">
    <transition-group 
      tag="div"
      class="stats-progress__container"
      @before-enter="beforeEnterItem"
      @enter="enterItem"
      appear
    >
      <div v-for="(stat, index) in stats" :key="stat.key" @click="viewTable(stat.key)" :data-index="index" class="stats-progress__item" :style="'width: '+ stat.percentage +'%;'"></div>
    </transition-group>
  </div>
  <div v-for="stat in stats" :key="stat.key">
    <div class="stats-progress__table" v-if="display[stat.key]">
      <p class="stats-progress__legend">{{ stat.key }} - {{ stat.percentage }}%</p>
      <transition-group
        tag="div"
        class="stats-progress__inner"
        @before-enter="beforeEnterCell"
        @enter="enterCell"
        appear
      >
        <div v-for="(item, index) in stat.item" :key="index" :data-index="index" class="stats-progress__cell">
          <div class="stats-progress__cell__left">
            <img class="stats-progress__icon" :src="item.icon" alt="">
            <span class="stats-progress__name">{{ item.name }}</span>
          </div>
          <span class="stats-progress__rarity">{{ item.rarity }}</span>
        </div>
      </transition-group>
    </div>
  </div>
  <p class="stats-progress__hint" v-if="!isTableDisplay">Click anywhere on the graph above</p>
</template>

<script>
import gsap from 'gsap'

export default {
  props: ['type', 'stats'],
  setup() {
    const beforeEnterItem = (el) => {
      el.style.transform = 'scaleX(0)'
    }

    const enterItem = (el, done) => {
      gsap.to(el, {
        transform: 'scaleX(1)',
        duration: .2,
        onComplete: done,
        delay: el.dataset.index * .2,
        ease: 'linear'
      })
    }

    const beforeEnterCell = (el) => {
      el.style.opacity = 0
      el.style.transform = 'scale(.2)'
    }

    const enterCell = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        transform: 'scale(1)',
        duration: .4,
        onComplete: done,
        delay: el.dataset.index * .05,
        ease: 'Back.easeOut.config(1.4)'
      })
    }

    return { beforeEnterItem, enterItem, beforeEnterCell, enterCell }
  },
  data() {
    return {
      display: {},
      isTableDisplay: false
    }
  },
  methods: {
    viewTable(key) {
      this.isTableDisplay = true
      for (const i in this.display) {
        this.display[i] = false
      }
      this.display[key] = !this.display[key]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.stats-progress {
  position: relative;
  width: 100%;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  &.fish {
    padding-top: 56.25%;
    mask-image: url('../assets/shape-fish.svg');
  }
  &.bugs {
    padding-top: 85.71%;
    mask-image: url('../assets/shape-bugs.svg');
  }
  &.villagers {
    padding-top: 85.71%;
    mask-image: url('../assets/shape-villagers.svg');
  }
  &__container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &__item {
    display: inline-block;
    height: 100%;
    cursor: pointer;
    transform-origin: left;
  }
  &__legend {
    text-align: center;
    margin-top: 1rem;
  }
  &__cell {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .25rem;
    &:not(:last-child) {
      border-bottom: dashed 1px $color-text;
    }
    &__left {
      display: flex;
      align-items: center;
    }
  }
  &__icon {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    border-radius: 30%;
    margin-right: .5rem;
  }
  &__hint {
    text-align: center;
    margin-top: 1rem;
    opacity: $opacity-low;
  }
}

@for $i from 1 through 10 {
  .stats-progress.fish .stats-progress__item:nth-child(#{$i}) {
    background-color: lighten($color-blue, ($i - 1) * 4%);
  }
}

@for $i from 1 through 10 {
  .stats-progress.bugs .stats-progress__item:nth-child(#{$i}) {
    background-color: lighten($color-pink, ($i - 1) * 2%);
  }
}

@for $i from 1 through 10 {
  .stats-progress.villagers .stats-progress__item:nth-child(#{$i}) {
    background-color: lighten($color-orange, ($i - 1) * 2%);
  }
}
</style>