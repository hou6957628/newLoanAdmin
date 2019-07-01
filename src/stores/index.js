import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/stores/mutations'
import state from '@/stores/state'
import getters from '@/stores/getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  getters
})
