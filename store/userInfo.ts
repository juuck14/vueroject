import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  id: '',
  password: '',
  username: '',
  age: 0
})
   
export type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
  login ({commit}, user){
    commit('login', user)
  }
}
   
export const mutations: MutationTree<RootState> = {
  login (state, user){
    Object.assign(state, user)
  }
}

export const getters: GetterTree<RootState, RootState> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getUserInfo(state: RootState) {
    return state
  }
}