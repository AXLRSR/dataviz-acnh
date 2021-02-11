<template>
  <div class="screen fish">
    <AppTitle title="Fish" />
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

.fish {
  background: $color-blue-light;
}
</style>