<template>
  <div class="screen home">
    <h1>Bienvenue !</h1>
    <div class="home__grid">
      <div class="home__item">
        <router-link :to="{ name: 'About' }" class="home__link">
          <div class="home__link__icon">
            <img src="@/assets/okpng-icons/nookwallet.png" alt="About">
          </div>
          <span class="home__link__title">About</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.home {
  background: $color-background;
  h1 {
    text-align: center;
  }
  &__grid {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    width: 33.33%;
    padding: .5rem;
  }
  &__link {
    display: block;
    width: 100%;
    text-align: center;
    &__icon {
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      position: relative;
      border-radius: 35%;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    &__title {
      color: $color-text;
    }
  }
}
</style>
