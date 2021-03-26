<template>
  <v-card class="mx-auto pa-5" max-width="344">
    <div class="wishlist--wrapper" cy-test="wishlist-action">
      <v-btn
        v-if="isInWishList"
        :key="wishList.length"
        rounded
        fab
        small
        color="white"
        @click="removeWishList(product)"
      >
        <v-icon color="red">mdi-star</v-icon>
      </v-btn>
      <v-btn
        v-else
        :key="wishList.length"
        fab
        small
        rounded
        @click="addWishList(product)"
      >
        <v-icon color="grey lighten-2">mdi-star</v-icon>
      </v-btn>
    </div>

    <v-img :src="product.cover_image_url" height="200px" />

    <v-card-title class="block-ellipsis" cy-test="product-title">
      {{ product.title }}
    </v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="product.reviews_avg"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
          class="white"
        ></v-rating>

        <div class="grey--text ml-4">
          {{ `${product.reviews_avg} (${product.reviews_number})` }}
        </div>
      </v-row>
      <v-row
        align="center"
        class="text-body-1 font-weight-bold mx-0 pt-3 text-center"
      >
        <div
          v-if="product.discount !== 0"
          class="text-decoration-line-through pr-3"
        >
          {{ product.retail_price.formatted_value }}
        </div>
        <div class="red--text">{{ product.retail_price.formatted_value }}</div>
      </v-row>
    </v-card-text>

    <v-card-subtitle cy-test="product-description" class="block-ellipsis">
      {{ product.description }}
    </v-card-subtitle>

    <v-card-actions :key="`${cart.length}`" cy-test="cart-action">
      <v-btn
        v-if="isInCart"
        text
        outlined
        block
        rounded
        color="black"
        class="text-uppercase grey lighten-2 remove-cart__btn"
        @click="removeCart(product)"
      >
        In cart
      </v-btn>
      <v-hover v-else v-slot="{ hover }">
        <v-btn
          text
          block
          rounded
          outlined
          class="text-uppercase add-cart__btn"
          :color="hover ? 'white' : 'black'"
          :class="hover ? 'black' : ''"
          @click="addCart(product)"
        >
          Add to cart
        </v-btn>
      </v-hover>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from '@nuxtjs/composition-api'
import { ProductType } from '~/interfaces'
import productCompose from '~/composables/product'

export default defineComponent({
  name: 'ProductItem',

  props: {
    product: {
      type: Object as () => ProductType,
      required: true,
    },
  },

  setup(props) {
    const {
      cart,
      wishList,
      addCart,
      removeCart,
      addWishList,
      removeWishList,
    } = productCompose()

    const isInCart: ComputedRef<Boolean> = computed((): boolean => {
      return cart.value.some((e: ProductType) => e.uuid === props.product.uuid)
    })

    const isInWishList: ComputedRef<Boolean> = computed((): boolean => {
      return wishList.value.some(
        (e: ProductType) => e.uuid === props.product.uuid
      )
    })

    return {
      // computed
      cart,
      wishList,
      // methods
      addCart,
      removeCart,
      addWishList,
      removeWishList,
      isInCart,
      isInWishList,
    }
  },
})
</script>

<style lang="scss" scoped>
.wishlist--wrapper {
  position: absolute;
  z-index: 1;
  right: 5px;
  top: 5px;
}
</style>
