<template>
  <div class="screen bugs">
    <AppTitle title="Bugs" />
    <StatsProgress type="bugs" :stats="location" />
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
  methods: {
    sortLocation(str) {
      switch(true) {
        case /flying/gi.test(str):
          return 'Flying'
        case /tree/gi.test(str):
          return 'Trees'
        case /ground/gi.test(str):
          return 'Ground'
        case /flowers/gi.test(str):
          return 'Flowers'
        case /rocks/gi.test(str):
          return 'Rocks'
        default:
          return 'Miscellaneous'
      }
    }
  },
  mounted() {
    fetch('http://acnhapi.com/v1/bugs')
      .then(res => res.json())
      .then(data => {
        const bugs = map(data, value => {
          return {
            name: get(value, 'name.name-USen'),
            icon: get(value, 'icon_uri'),
            location: this.sortLocation(get(value, 'availability.location', '')),
            rarity: get(value, 'availability.rarity')
          }
        })

        const location = map(groupBy(bugs, 'location'), (value, key) => ({
          key,
          item: value,
          total: value.length,
          percentage: (value.length * 100) / bugs.length
        }))

        this.location = orderBy(location, location => location.total, 'desc')
      })
      .catch(err => console.log(err.message))
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.bugs {
  background: $color-pink-light;
}
</style>