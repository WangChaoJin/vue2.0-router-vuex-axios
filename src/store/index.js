import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

import state from './states'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})