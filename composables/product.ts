import { computed, ComputedRef } from '@nuxtjs/composition-api'
import { ProductType } from '~/interfaces'
import { useStore } from '~/store'

export default function useProduct() {
  const store = useStore()

  const products: ComputedRef<ProductType[]> = computed(
    (): ProductType[] => store.getters.products
  )
  const cart: ComputedRef<ProductType[]> = computed(
    (): ProductType[] => store.getters.cart
  )
  const wishList: ComputedRef<ProductType[]> = computed(
    (): ProductType[] => store.getters.wishList
  )

  const subTotalPrice = computed((): string => {
    let subTotal = 0
    cart.value.forEach((el) => {
      subTotal += el.retail_price.value
    })
    return `€ ${subTotal.toFixed(2)}`
  })

  const addCart = (product: ProductType) => {
    store.commit('ADD_CART', product)
  }

  const removeCart = (product: ProductType) => {
    store.commit('REMOVE_CART', product)
  }

  const addWishList = (product: ProductType) => {
    store.commit('ADD_WISHLIST', product)
  }

  const removeWishList = (product: ProductType) => {
    store.commit('REMOVE_WISHLIST', product)
  }

  return {
    cart,
    wishList,
    products,
    subTotalPrice,
    addCart,
    removeCart,
    addWishList,
    removeWishList,
  }
}
