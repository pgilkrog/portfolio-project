<template lang="pug">
.skill-card
  .bg-shadow.p-4.rounded.mx-4
    .d-flex.justify-content-center
      b-avatar(:icon="text" variant="primary" size="5rem")
    h3.text-primary.mt-4
      strong {{ title }}
    .mt-2.ml-2
      span(v-for="item in skills")
        .d-flex.align-items-center.mt-1
          b-icon.p-1(icon="circle-fill")
          .font-weight-bold.pl-2 {{ item }}

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
}
</script>
