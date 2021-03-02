<template>
  <div class="screen fish">
    <AppTitle title="Fish" />
    <StatsProgress type="fish" :stats="location" />
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import StatsProgress from '@/components/StatsProgress'
import {
  get,
  groupBy,
  map,
  nth,
  orderBy,
  split
} from 'lodash'

export default {
  components: { AppTitle, StatsProgress },
  data() {
    return {
      location: {}
    }
  },
  mounted() {
    fetch('http://acnhapi.com/v1/fish')
      .then(res => res.json())
      .then(data => {
        const fish = map(data, value => {
          return {
            name: get(value, 'name.name-USen'),
            location: nth(split(get(value, 'availability.location', ''), ' '), 0),
            rarity: get(value, 'availability.rarity')
          }
        })

        const location = map(groupBy(fish, 'location'), (value, key) => ({
          key,
          fish: value,
          total: value.length,
          percentage: (value.length * 100) / fish.length
        }))

        this.location = orderBy(location, location => location.total, 'desc')
      })
      .catch(err => console.log(err.message))
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.fish {
  background: $color-blue-light;
}
</style>