import { getterTree, mutationTree } from 'typed-vuex'

export const state = () => ({
  id: undefined as number | undefined,
})
export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  id: (state) => state.id,
})

export const mutations = mutationTree(state, {
  setid(state, id: number): void {
    state.id = id
  },
})
