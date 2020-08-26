import Vue from 'vue'
import Vuex from 'vuex'
import mtareas from './modules/tasks'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mtareas
  },
  strict: true,
})
