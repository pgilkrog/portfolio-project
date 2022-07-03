import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './styles/main.sass'
import VueI18n from 'vue-i18n'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueI18n)
Vue.config.productionTip = false

// Ready translated locale messages
const messages = {
  dk: {
    message: {
      software_developer: 'Software developer'
    },
    menu: {
      home: 'Forside',
      skills: 'Kompetencer',
      projects: 'Projekter',
      contact: 'Kontakt'
    },
    skills: {
      best: 'Bedste',
      known: 'Bekendte',
      various: 'Diverse'
    }
  },
  en: {
    message: {
      software_developer: 'Software udvikler'
    },
    menu: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    skills: {
      best: 'Best',
      known: 'Known',
      various: 'Various'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'dk', // set locale
  messages // set locale messages
})

new Vue({
  router,
  render: h => h(App),
  i18n
}).$mount('#app')
