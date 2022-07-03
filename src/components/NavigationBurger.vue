<template lang="pug">
.navigation
  input.checkbox(type="checkbox" v-model="showMenu")

  label.button.position-fixed.d-flex.align-items-center.justify-content-center(
    v-on:click="changeShowMenu()"
    v-b-hover="handleHover"
  )
    b-icon(
      v-if="!isHovered"
      icon="circle"
      :variant="showMenu ? 'secondary' : (darkMode === false ? 'dark' : 'light')"
      :scale="windowWidth > 768 ? 3 : 2"
    )
    b-icon(
      v-else
      icon="circle"
      variant="primary"
      :scale="windowWidth > 768 ? 3 : 2"
    )

  .background.position-fixed

  nav.nav.position-fixed
    .list.position-absolute
      .item
        .d-flex.justify-content-center
          LightBulb.mx-4.pointer(v-on:changeMode="changeMode($event)")
          .languages.mx-4
            b-img.mx-2.pointer(:src="dkFlag" height="30" width="30" v-on:click="changeLanguage('dk')")
            b-img.mx-2.pointer(:src="enFlag" height="30" width="30" v-on:click="changeLanguage('en')")
      .item(v-on:click="changeShowMenu")
        router-link.link(to="/home")
          //- b-icon.mr-4(icon="house-door")
          | {{ $t("menu.home") }}
      .item(v-on:click="changeShowMenu")
        router-link.link(to="/skills")
          //- b-icon.mr-4(icon="terminal")
          | {{ $t("menu.skills") }}
      .item(v-on:click="changeShowMenu")
        router-link.link(to="/projects")
          //- b-icon.mr-4(icon="kanban")
          | {{ $t("menu.projects") }}
      .item(v-on:click="changeShowMenu")
        router-link.link(to="/contact")
          //- b-icon.mr-4(icon="person-circle")
          | {{ $t("menu.contact") }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LightBulb from '@/components/LightBulb.vue'

@Component({
  components: {
    LightBulb
  },
  props: {

  }
})
export default class Navigation extends Vue {
  dkFlag = require('@/assets/images/denmark.png')
  enFlag = require('@/assets/images/united-kingdom.png')

  showMenu = false
  isHovered = false
  windowWidth = window.innerWidth
  darkMode = false

  changeShowMenu (): void {
    this.showMenu = !this.showMenu
  }

  handleHover (hovered: boolean): void {
    this.isHovered = hovered
  }

  changeMode (bool: boolean): void {
    this.darkMode = bool
  }

  changeLanguage (lang: string): void {
    this.$i18n.locale = lang
  }
}
</script>
