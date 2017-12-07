
import { NAME } from './mutation-types'

export default {
	getName({commit},param){
		commit(NAME,param)
	}
}