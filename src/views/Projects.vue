<template lang="pug">
.projects.w-100
  ProjectListItem(
    v-for="item in projects"
    :key="item.id"
    :project="item"
  )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import projectsData from '@/assets/data/projectData.json'
import { IProject } from '@/helpers/interfaces'
import ProjectListItem from '@/components/ProjectListItem.vue'

@Component({
  components: {
    ProjectListItem
  }
})

export default class Projects extends Vue {
  projects: IProject[] = []

  mounted (): void {
    for (const item in projectsData.projects) {
      this.projects.push({
        id: projectsData.projects[item].id,
        name: projectsData.projects[item].name,
        description: projectsData.projects[item].description,
        shortDescription: projectsData.projects[item].shortDescription,
        mainImage: projectsData.projects[item].mainImage,
        images: projectsData.projects[item].images,
        technologies: projectsData.projects[item].technologies,
        type: projectsData.projects[item].type,
        github: projectsData.projects[item].github
      } as IProject)
    }
  }
}
</script>
