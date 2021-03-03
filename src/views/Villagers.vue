<template>
  <div class="screen villagers">
    <AppTitle title="Villagers" />
    <StatsProgress type="villagers" :stats="location" />
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
    fetch('http://acnhapi.com/v1/villagers')
      .then(res => res.json())
      .then(data => {
        const villagers = map(data, value => {
          return {
            name: get(value, 'name.name-USen'),
            icon: get(value, 'icon_uri'),
            location: get(value, 'personality', ''),
            rarity: get(value, 'species')
          }
        })

        const location = map(groupBy(villagers, 'location'), (value, key) => ({
          key,
          item: value,
          total: value.length,
          percentage: Math.round((((value.length * 100) / villagers.length) + Number.EPSILON) * 100) / 100
        }))

        this.location = orderBy(location, location => location.total, 'desc')
      })
      .catch(err => console.log(err.message))
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.villagers {
  background: $color-orange-light;
}
</style>