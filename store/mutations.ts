import Vue from 'vue'
import { MutationTree } from 'vuex'

import { ProductType } from '../interfaces'
import { RootState } from './state'

export interface Mutations {
  INIT_LIST(state: RootState): void
  SET_LOAD(state: RootState, load: Boolean): void
  ADD_CART(state: RootState, newCart: ProductType): void
  REMOVE_CART(state: RootState, product: ProductType): void
  ADD_WISHLIST(state: RootState, newWish: ProductType): void
  REMOVE_WISHLIST(state: RootState, product: ProductType): void
  SET_PRODUCTS(state: RootState, products: ProductType[]): void
}

const mutations: MutationTree<RootState> & Mutations = {
  INIT_LIST: (state) => {
    const cart = localStorage.getItem('cart')
    const wishList = localStorage.getItem('wishList')
    if (cart) Vue.set(state, 'cart', JSON.parse(cart))
    if (wishList) Vue.set(state, 'wishList', JSON.parse(wishList))
  },

  SET_LOAD: (state, load) => {
    state.loading = load
  },

  ADD_CART: (state, newCart) => {
    localStorage.setItem('cart', JSON.stringify([...state.cart, newCart]))
    Vue.set(state, 'cart', [...state.cart, newCart])
  },

  REMOVE_CART: (state, product) => {
    const newCart = state.cart.filter((el) => el.uuid !== product.uuid)
    Vue.set(state, 'cart', newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  },

  ADD_WISHLIST: (state, newWish) => {
    localStorage.setItem(
      'wishList',
      JSON.stringify([...state.wishList, newWish])
    )
    Vue.set(state, 'wishList', [...state.wishList, newWish])
  },

  REMOVE_WISHLIST: (state, product) => {
    const newWishList = state.wishList.filter((el) => el.uuid !== product.uuid)
    Vue.set(state, 'wishList', newWishList)
    localStorage.setItem('wishList', JSON.stringify(newWishList))
  },

  SET_PRODUCTS: (state, products) => {
    Vue.set(state, 'products', products)
  },
}

export default mutations
