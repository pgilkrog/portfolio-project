<template lang="pug">
.skills
  .skills-cards
    SkillCard(
      :title="$t('skills.best')"
      text="display"
      :skills='["Vue", "Typescript", "Javascript", "HTML/Pug", "CSS/SASS", "Bootstrap"]'
    )
    SkillCard(
      :title="$t('skills.known')"
      text="server"
      :skills='[".Net", "C#", "Umbraco", "Angular", "React", "MSSQL", "Firebase"]'
    )
    SkillCard(
      :title="$t('skills.various')"
      text="briefcase"
      :skills='["Azure", "Scrum/xp", "Dev-Ops", "Unity", "Phaser"]'
    )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import skillsData from '../assets/data/skillsData.json'
import SkillCard from '@/components/SkillCard.vue'
import { ISkill } from '@/helpers/interfaces'

@Component({
  components: {
    SkillCard
  }
})

export default class Skills extends Vue {
  mainSkills: ISkill[] = []
  activeSkill = ''

  mounted (): void {
    for (const item in skillsData.mainSkills) {
      this.mainSkills.push({
        icon: skillsData.mainSkills[item].icon,
        title: skillsData.mainSkills[item].title,
        description: skillsData.mainSkills[item].description
      } as ISkill)
    }
  }
}
</script>
