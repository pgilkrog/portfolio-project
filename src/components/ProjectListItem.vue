<template lang="pug">
.project-list-item.pointer.text-center(v-on:click="goTo()")
  .list-item.rounded.p-4
    .front
      h2.text-primary
        strong {{ project.name }}
    .back
      .p.mt-4 {{project.shortDescription}}
    //h4.mt-4 {{project.technologies[0] + ", " + project.technologies[1] + ", " + project.technologies[2]}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IProject } from '@/helpers/interfaces'
import router from '@/router'

@Component({
  components: {

  },
  props: {
    project: Object
  }
})

export default class ProjectListItem extends Vue {
  project!: IProject

  getImage (img: string): string {
    return require('@/assets/images/imgProjects/' + img + '.png')
  }

  goTo (): void {
    router.push('/project/' + this.project.id)
  }
}
</script>
