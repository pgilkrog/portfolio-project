<template lang="pug">
.projects.w-100
  .project-search-wrapper.pt-4.px-4.d-flex.align-items-center
    input.rounded(type="text" required placeholder="Search..." v-model="searchString" @input="sortList()")
    b-icon.ml-3(icon="search" font-scale="1.5")
  .projects-wrapper
    ProjectListItem(
      v-for="item in sortedList"
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
  sortedList: IProject[] = []
  searchString = ''

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
    this.sortedList = this.projects
  }

  sortList (): void {
    this.sortedList = this.projects.filter(x => x.description.includes(this.searchString))
  }
}
</script>
