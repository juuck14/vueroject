import { GetterTree, ActionTree, MutationTree } from 'vuex'

type User = {
  id: string,
  password: string,
  username: string,
  age: number
}

export const state = () => ([] as User[])
   
export type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
  register ({ commit }, user) {
    commit('insert', user)
  },
  login ({ state, commit }, user: User){
    const me: User[] = state.filter(a => a.id === user.id && a.password === user.password)
    return new Promise((resolve, reject) => {
      if(me.length > 0) {
        commit('userInfo/login', me[0], { root: true })
        resolve('success')
      }
      else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('failed')
      }
  })
  }
}
   
export const mutations: MutationTree<RootState> = {
  insert (state, user: User) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state.push({...user})
  }
}

export const getters: GetterTree<RootState, RootState> = {
  getUserList: (state: RootState) => (id: string = '') => {
    return id === '' ? state : state.filter(a => a.id === id)
  }
}