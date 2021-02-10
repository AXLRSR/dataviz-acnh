<template>
  <div class="status-bar">
    <div class="status-bar__left">
      <img src="@/assets/icn-network.svg" alt="">
      <img src="@/assets/icn-nook.svg" alt="">
    </div>
    <div class="status-bar__center">
      <span class="status-bar__time">8:15 PM</span>
    </div>
    <div class="status-bar__right">
      <img src="@/assets/icn-location.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.status-bar {
  height: 2rem;
  opacity: $opacity-low;
  display: flex;
  position: absolute;
  width: calc(100% - 4rem);
  margin: 2rem 2rem;
  &__center, &__left, &__right {
    width: 33.33%;
    display: flex;
    align-items: center;
  }
  &__center {
    justify-content: center;
  }
  &__left {
    img {
      height: 50%;
      margin-right: .25rem;
    }
  }
  &__right {
    justify-content: flex-end;
    img {
      height: 70%;
    }
  }
}
</style>