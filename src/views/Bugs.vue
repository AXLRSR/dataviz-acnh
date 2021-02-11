<template>
  <div class="screen bugs">
    <AppTitle title="Bugs" />
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

.bugs {
  background: $color-pink-light;
}
</style>