<template>
  <div :class="'stats-progress ' + type">
    <div class="stats-progress__container">
      <div v-for="stat in stats" :key="stat.key" class="stats-progress__item" :style="'width: '+ stat.percentage +'%;'"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'stats']
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.stats-progress {
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
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
</style>