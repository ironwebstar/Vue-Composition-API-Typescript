import Vue from 'vue'
import Vuex, {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  createLogger,
} from 'vuex'

import state, { RootState } from './state'
import mutations, { Mutations } from './mutations'
import actions, { Actions } from './actions'
import getters, { Getters } from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store<RootState>({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state,
  mutations,
  actions,
  getters,
})

export type Store = Omit<
  VuexStore<RootState>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

export function useStore() {
  return store as Store
}
