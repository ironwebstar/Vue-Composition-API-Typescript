import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'

import ProductItem from '@/components/ProductItem.vue'
import { productValue } from '~/test/unit/mock-input'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ProductItem', () => {
  let actions
  let store
  let mutations
  let getters
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
    actions = {
      getProducts: jest.fn(),
    }
    mutations = {
      ADD_CART: jest.fn(),
      REMOVE_CART: jest.fn(),
      ADD_WISHLIST: jest.fn(),
      REMOVE_WISHLIST: jest.fn(),
      SET_PRODUCTS: jest.fn(),
    }
    getters = {
      products: () => [productValue],
      cart: () => [],
      wishList: () => [],
    }

    store = new Vuex.Store({
      actions,
      mutations,
      getters,
    })
  })

  it('should be a Vue instance', () => {
    const wrapper = mount(ProductItem, {
      localVue,
      vuetify,
      store,
      propsData: {
        product: productValue,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })

  it('should be render title, description name', () => {
    const wrapper = mount(ProductItem, {
      localVue,
      vuetify,
      store,
      propsData: {
        product: productValue,
      },
    })
    const title = wrapper.find('.v-card__title')
    expect(title.text()).toBe('Title')
    const description = wrapper.find('.v-card__subtitle')
    expect(description.text()).toBe('Description')
  })

  it('should call addCart method when click button', () => {
    const wrapper = mount(ProductItem, {
      localVue,
      vuetify,
      store,
      propsData: {
        product: productValue,
      },
    })

    wrapper.vm.addCart = jest.fn()
    const addToCartBtn = wrapper.find('.v-card__actions .add-cart__btn')
    expect(addToCartBtn.text().toUpperCase()).toBe('ADD TO CART')

    addToCartBtn.trigger('click')
    expect(wrapper.vm.addCart).toHaveBeenCalledTimes(1)
  })

  it('should call removeCart method when click button', async () => {
    getters = {
      products: () => [productValue],
      cart: () => [],
      wishList: () => [],
    }

    store = new Vuex.Store({
      actions,
      mutations,
      getters,
    })
    const wrapper = mount(ProductItem, {
      localVue,
      vuetify,
      store,
      propsData: {
        product: productValue,
      },
    })
    const removeCartBtn = wrapper.find('.v-card__actions button')

    await removeCartBtn.trigger('click')
    expect(wrapper.find('.v-card__actions').text().toUpperCase()).toBe(
      'IN CART'
    )
  })

  it('should call addWishList method when click button', () => {
    const wrapper = mount(ProductItem, {
      localVue,
      vuetify,
      store,
      propsData: {
        product: productValue,
      },
    })

    wrapper.vm.addWishList = jest.fn()
    const addWishListBtn = wrapper.find('.wishlist--wrapper button')

    addWishListBtn.trigger('click')
    expect(wrapper.vm.addWishList).toHaveBeenCalledTimes(1)
  })

  it('should call removeWishList method when click button', async () => {
    getters = {
      products: () => [productValue],
      cart: () => [],
      wishList: () => [productValue],
    }

    store = new Vuex.Store({
      actions,
      mutations,
      getters,
    })
    const wrapper = mount(ProductItem, {
      localVue,
      vuetify,
      store,
      propsData: {
        product: productValue,
      },
    })
    const removeWishListBtn = wrapper.find('.wishlist--wrapper button')

    await removeWishListBtn.trigger('click')
    expect(wrapper.find('i').classes()).toContain('red--text')
  })
})
