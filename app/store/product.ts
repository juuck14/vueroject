import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  _id: 0,
  title: 'Unknown',
  price: 0
})
   
export type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
  load ({ commit }) {
    return new Promise((resolve) => {
      
      setTimeout(() => {
        commit('update', { _id: 1, title: 'Product', price: 99.99 })
        resolve('dorf')
      }, 1000)
    })
  }
}
   
export const mutations: MutationTree<RootState> = {
  update (state, product: RootState) {
    Object.assign(state, product)
  }
}