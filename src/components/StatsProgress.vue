<template>
  <div :class="'stats-progress ' + type">
    <div class="stats-progress__container">
      <div v-for="stat in stats" :key="stat.key" @click="viewTable(stat.key)" class="stats-progress__item" :style="'width: '+ stat.percentage +'%;'"></div>
    </div>
  </div>
  <div v-for="stat in stats" :key="stat.key">
    <div class="stats-progress__table" v-if="display[stat.key]">
      <p class="stats-progress__legend">{{ stat.key }} - {{ stat.percentage }}%</p>
      <div class="stats-progress__inner">
        <div v-for="item in stat.item" :key="item.name" class="stats-progress__cell">
          <div class="stats-progress__cell__left">
            <img class="stats-progress__icon" :src="item.icon" alt="">
            <span class="stats-progress__name">{{ item.name }}</span>
          </div>
          <span class="stats-progress__rarity">{{ item.rarity }}</span>
        </div>
      </div>
    </div>
  </div>
  <p class="stats-progress__hint" v-if="!isTableDisplay">Click anywhere on the graph above</p>
</template>

<script>
export default {
  props: ['type', 'stats'],
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