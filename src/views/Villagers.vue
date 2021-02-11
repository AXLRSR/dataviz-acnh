<template>
  <div class="screen villagers">
    <AppTitle title="Villagers" />
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

.villagers {
  background: $color-orange-light;
}
</style>