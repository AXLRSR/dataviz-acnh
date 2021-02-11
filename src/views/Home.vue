<template>
  <div class="screen home">
    <h1>Welcome!</h1>
    <div class="home__grid">
      <div class="home__item">
        <router-link :to="{ name: 'Fish' }" class="home__link">
          <div class="home__link__icon">
            <img src="@/assets/app-icons/fish.png" alt="Fish">
          </div>
          <span class="home__link__title">Fish</span>
        </router-link>
      </div>
      <div class="home__item">
        <router-link :to="{ name: 'Bugs' }" class="home__link">
          <div class="home__link__icon">
            <img src="@/assets/app-icons/bugs.png" alt="Bugs">
          </div>
          <span class="home__link__title">Bugs</span>
        </router-link>
      </div>
      <div class="home__item">
        <router-link :to="{ name: 'Villagers' }" class="home__link">
          <div class="home__link__icon">
            <img src="@/assets/app-icons/villagers.png" alt="Villagers">
          </div>
          <span class="home__link__title">Villagers</span>
        </router-link>
      </div>
      <div class="home__item">
        <router-link :to="{ name: 'About' }" class="home__link">
          <div class="home__link__icon">
            <img src="@/assets/app-icons/nookwallet.png" alt="About">
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
