<template>
  <div class="app-title">
    <router-link :to="{ name: 'Home' }" class="app-title__back">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
    </router-link>
    <h1 class="app-title__title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.app-title {
  position: relative;
  &__back {
    position: absolute;
    display: block;
    height: 3rem;
    width: 3rem;
    background: $color-text;
    color: $color-background;
    padding: .75rem;
    border-radius: 30%;
    transform: scale(.75);
    svg {
      width: 100%;
      height: 100%;
    }
  }
  &__title {
    text-align: center;
    padding: 0 3rem;
  }
}
</style>