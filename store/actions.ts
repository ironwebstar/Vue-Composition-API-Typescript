import { ActionTree, ActionContext } from 'vuex'

import { ProductType, getProductParamType } from '../interfaces'
import { RootState } from './state'
import { Mutations } from './mutations'

import { $axios } from '~/plugins/axios'

type ActionAugments = Omit<ActionContext<RootState, RootState>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export interface Actions {
  nuxtServerInit({ commit }: ActionAugments): void
  getProducts(
    { commit }: ActionAugments,
    params: getProductParamType
  ): Promise<ProductType[]>
}

const actions: ActionTree<RootState, RootState> & Actions = {
  nuxtServerInit({ commit }) {
    commit('INIT_LIST')
  },

  getProducts({ commit }, params) {
    commit('SET_LOAD', true)

    return new Promise(() => {
      let paramQuery = `/venues/${params.venueId}/activities?`
      Object.entries(params).forEach(([key, value]) => {
        paramQuery += `${key}=${value}&`
      })

      $axios.$get(paramQuery).then((res) => {
        commit('SET_PRODUCTS', res)
        commit('SET_LOAD', false)
      })
    })
  },
}

export default actions
