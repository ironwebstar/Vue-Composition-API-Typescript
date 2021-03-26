import { ProductType } from '../interfaces'

export const state = () => ({
  loading: false as Boolean,
  products: [] as ProductType[],
  cart: [] as ProductType[],
  wishList: [] as ProductType[],
})

export type RootState = ReturnType<typeof state>

export default state
