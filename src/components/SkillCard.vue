<template lang="pug">
.position-relative.card-container.mx-4.my-2
  .skill-card.pointer.p-4.rounded(v-on:click="changeCard()").bg-shadow.bg-light(:class="activeCard ? 'active':''")
    .bg-inner-shadow.p-2.rounded-circle
      b-avatar(:icon="text" variant="primary" size="8rem")
    //- h3.text-primary.mt-4
    //-   strong {{ title }}
  .skill-card.pointer.p-4.rounded(v-on:click="changeCard()").bg-inner-shadow
    h3.text-primary.my-4
      strong {{ title }}
    h5(v-for="item in skills")
      .font-weight-bold.mt-2 {{ item }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {

  },
  props: {
    title: String,
    text: String,
    skills: Array
  }
})
export default class SkillCard extends Vue {
  title: string | undefined
  text: string | undefined
  skills: string[] | undefined

  activeCard = false

  changeCard () {
    this.activeCard = !this.activeCard
  }
}
</script>
