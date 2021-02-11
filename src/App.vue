<template>
  <StatusBar />
  <router-view/>
</template>

<script>
import StatusBar from '@/components/StatusBar'

export default {
  components: { StatusBar }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

body {
  background: $color-text;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  color: $color-text;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  @media (min-width: 576px) {
    width: 375px;
    height: 667px;
    border-radius: 4rem;
  }
}
.screen {
  padding: 6rem 2rem 2rem;
  height: 100%;
  overflow: scroll;
}
</style>
