<template lang="pug">
.h-100.d-flex.align-items-center.justify-content-center
  .contact.text-center
    .bg-shadow(style="border-radius: 50%").m-3
      b-avatar(
        :src="image"
        size="100%"
        type="image"
        variant="transparent"
      )
    .mt-4.font-weight-bold
      IconAndText(title="21 53 55 74" icon="phone-fill")
      IconAndText(title="pgilkrog@gmail.com" icon="envelope-fill")
      IconAndText(title="Aarhus, Tilst" icon="geo-alt-fill")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import IconAndText from '@/components/IconAndText.vue'
@Component({
  components: {
    IconAndText
  }
})
export default class Contact extends Vue {
  image = require('@/assets/CirclePaw.png')
  windowWidth = window.innerWidth
}
</script>
