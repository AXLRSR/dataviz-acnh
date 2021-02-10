<template>
  <div class="status-bar">
    <div class="status-bar__left">
      <img src="@/assets/icn-network.svg" alt="">
      <img src="@/assets/icn-nook.svg" alt="">
    </div>
    <div class="status-bar__center">
      <span class="status-bar__time" v-if="this.hours">{{ hours }}:{{ minutes }} {{ ampm }}</span>
    </div>
    <div class="status-bar__right">
      <img src="@/assets/icn-location.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hours: null,
      minutes: null,
      ampm: null
    }
  },
  mounted() {
    this.showTime()
  },
  methods: {
    showTime() {
      setInterval(() => {
        const now = new Date()
        var hours = now.getHours()
        var minutes = now.getMinutes()
        var ampm = hours >= 12 ? 'pm' : 'am'
        hours = hours % 12
        hours = hours ? hours : 12
        minutes = minutes < 10 ? '0'+minutes : minutes

        this.hours = hours
        this.minutes = minutes
        this.ampm = ampm
      }, 1000)
    }
  }
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
  &__time {
    text-transform: uppercase;
  }
}
</style>