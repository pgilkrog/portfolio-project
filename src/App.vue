<template lang="pug">
.app.h-100.d-flex
  NavigationBurger
  .w-100
    router-view(:key="$route.path")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavigationBurger from '@/components/NavigationBurger.vue'
import LightBulb from '@/components/LightBulb.vue'

@Component({
  components: {
    NavigationBurger,
    LightBulb
  }
})

export default class Home extends Vue {

}
</script>
