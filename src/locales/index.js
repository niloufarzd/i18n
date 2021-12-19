import VueI18n from 'vue-i18n'
import Vue from 'vue'
 import fa from './fa/index.js'
 import en from './en/index.js'
 import ja from './ja/index.js'
Vue.use(VueI18n)


const messages = {
    en,
  
    ja,
      
    fa,
      
  
  }
  // Create VueI18n instance with options
 export  default new VueI18n({
    locale: localStorage.getItem("lang"), // set locale
    messages, // set locale messages
  })
  