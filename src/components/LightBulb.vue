<template lang="pug">
.light-bulb
  b-icon(:icon="darkMode ? 'lightbulb' : 'lightbulb-fill'" variant="primary" scale="2" v-on:click="changeMode()")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {

  },
  props: {

  }
})
export default class LightBulb extends Vue {
  darkMode = false

  mounted (): void {
    this.$watch('darkMode', (darkMode) => {
      const htmlElement = document.documentElement

      if (darkMode) {
        sessionStorage.setItem('theme', 'dark')
        htmlElement.setAttribute('theme', 'dark')
      } else {
        sessionStorage.setItem('theme', 'light')
        htmlElement.setAttribute('theme', 'light')
      }
    })

    const bodyElement = document.body
    bodyElement.classList.add('app-background')

    // check for active theme
    const htmlElement = document.documentElement
    const theme = localStorage.getItem('theme')

    if (theme === 'dark') {
      htmlElement.setAttribute('theme', 'dark')
      this.darkMode = true
    } else {
      htmlElement.setAttribute('theme', 'light')
      this.darkMode = false
    }
  }

  changeMode (): void {
    this.darkMode = !this.darkMode
    this.$emit('changeMode', this.darkMode)
  }
}
</script>
