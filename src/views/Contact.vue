<template lang="pug">
.h-100.d-flex.align-items-center.justify-content-center.px-3
  .contact.text-center.bg-shadow.rounded
    b-avatar(
      :src="image"
      size="250"
      type="image"
    ).bg-inner-shadow.p-3
    .icons-wrapper.mt-4.font-weight-bold.py-4
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
