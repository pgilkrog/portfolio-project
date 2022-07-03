<template lang="pug">
.h-100.d-flex.align-items-center.justify-content-center
  .home
    .home-page-header-text.font-weight-bold(v-html="colorVowels('Paw Gilkrog')")
    .home-page-undertitle
      h2(v-html="colorVowels(underTitle)")
    .d-flex.justify-content-end
      .neu-button
        a(href="https://www.linkedin.com/in/paw-gilkrog-463a03169/" target="_blank")
          b-icon.p-2.pointer(
            icon="linkedin"
            variant="primary"
            font-scale="3"
          )
      .neu-button
        a(href="https://github.com/pgilkrog" target="_blank")
          b-icon.p-2.pointer(
            icon="github"
            variant="primary"
            font-scale="3"
          )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import colorVowels from '../helpers/colorVowels'

@Component({
  components: {

  }
})

export default class Home extends Vue {
  underTitle = this.$t('message.software_developer').toString()
  colorVowels (stringToCHange: string): string {
    return colorVowels(stringToCHange, 'primary')
  }
}
</script>
