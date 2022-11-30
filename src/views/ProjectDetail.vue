<template lang="pug">
.h-100.d-flex.align-items-center.justify-content-center
  .project-detail.p-2(v-if="project !== undefined")
    .mr-4
      h1 {{project.name}}
    .project-description.d-flex.align-items-center.my-4
        div.h-100
          | {{project.description}}
    .bg-inner-shadow.p-2.rounded.d-flex.justify-content-between.mt-2
      .technologies-list.rounded.py-4.pr-4
        ul
          li(:key="$index" v-for="(item, $index) in project.technologies")
            | {{item}}
      .neu-button
        a(:href="project.github" target="_blank")
          b-icon.p-2.pointer(
            icon="github"
            variant="primary"
            font-scale="3"
          )
    .project-detail-images.d-flex.justify-content-between.mt-4(v-if="project.images.length > 0")
      img(v-for="item in project.images" :src="getImage(item)" height="100" v-on:click="selectImage(item)" @click="$bvModal.show('bv-modal-example')")
  b-modal(id="bv-modal-example" hide-footer variant="light").w-100
    b-img(:src="getImage(selectedImage)" style="width: 100%;")

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IProject } from '@/helpers/interfaces'
import projectsData from '@/assets/data/projectData.json'

@Component({

})

export default class Projects extends Vue {
  project = projectsData.projects.find(item => item.id.toString() === this.$route.params.id) as IProject
  selectedImage = ''

  getImage (img: string): string {
    if (img !== undefined && img !== '') {
      return require('@/assets/images/imgProjects/' + img)
    } else { return '' }
  }

  selectImage (img: string): void {
    this.selectedImage = img
  }
}
</script>
