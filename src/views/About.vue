<template>
  <div class="screen about">
    <AppTitle title="About" />
    <div class="about__container">
      <p class="about__speech"><span>Hello!</span></p>
      <p class="about__item">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
        <span>France</span>
      </p>
      <p class="about__item">
        <span>Front-End Developer</span>
      </p>
      <p class="about__item">
        <span>AXLRSR</span>
      </p>
      <p class="about__item">
        <a href="https://axlrsr.fr/" target="_blank" rel="noopener noreferrer">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
          <span>axlrsr.fr</span>
        </a>
      </p>
    </div>
    <p class="about__credits">Icons from <a href="https://www.animal-crossing.com/new-horizons" target="_blank" rel="noopener noreferrer">Animal Crossing: New Horizons</a> and <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a></p>
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'

export default {
  components: { AppTitle }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.about {
  background: $color-green-light;
  &__container {
    background: $color-green;
    border-radius: 1rem;
    padding: 1rem 1rem .5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 .5rem 1rem rgba($color: $color-text, $alpha: .25);
  }
  &__speech {
    span {
      display: inline-block;
      background: $color-green-light;
      color: $color-green;
      padding: .5rem 1rem;
      border-radius: 1rem;
    }
  }
  &__item {
    color: $color-green-light;
    margin-bottom: .5rem;
    display: flex;
    align-items: center;
    &:not(:last-child) {
      padding-bottom: .5rem;
      border-bottom: solid 2px $color-green-light;
    }
    svg {
      height: 1.5rem;
      margin-right: .5rem;
      padding-bottom: .25rem;
    }
    a {
      display: flex;
      align-items: center;
      color: inherit;
    }
  }
  &__credits {
    text-align: center;
    opacity: $opacity-low;
    a {
      text-decoration: underline;
      color: inherit;
    }
  }
}
</style>