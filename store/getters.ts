import { GetterTree } from 'vuex'

import { ProductType } from '../interfaces'
import { RootState } from './state'

export type Getters = {
  loading(state: RootState): Boolean
  products(state: RootState): ProductType[]
  cart(state: RootState): ProductType[]
  wishList(state: RootState): ProductType[]
}

const getters: GetterTree<RootState, RootState> & Getters = {
  loading: (state) => state.loading,
  products: (state) => state.products,
  cart: (state) => state.cart,
  wishList: (state) => state.wishList,
}

export default getters
