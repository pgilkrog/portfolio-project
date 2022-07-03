<template lang="pug">
.d-flex.p-4.justify-content-center.align-items-center
  b-icon(:icon="icon" font-scale="2" variant="primary")
  h4.font-weight-bold.ml-2 {{ title }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {

  },
  props: {
    title: String,
    icon: String
  }
})
export default class IconAndText extends Vue {
  title: string | undefined
  icon: string | undefined
}
</script>
