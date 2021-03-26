<template>
  <v-container>
    <v-row v-if="loading" justify="center" align="center">
      <v-progress-circular :size="50" color="primary" indeterminate />
    </v-row>

    <v-row v-else justify="center" align="start">
      <v-col>
        <v-card class="mx-auto" max-width="500" min-width="300">
          <v-list>
            <template v-for="(product, index) in cart">
              <v-list-item :key="product.uuid" class="pa-4 d-flex align-start">
                <v-img :src="product.cover_image_url" width="50px" />
                <v-list-item-content class="pl-4">
                  <v-list-item-title>{{ product.title }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ `1 &#215; ${product.retail_price.formatted_value}` }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-hover v-slot="{ hover }">
                    <v-btn
                      icon
                      x-small
                      class="grey"
                      :elevation="hover ? 5 : 2"
                      :class="hover ? 'lighten-0' : 'lighten-1'"
                      @click="removeCart(product)"
                    >
                      <v-icon color="white">mdi-close</v-icon>
                    </v-btn>
                  </v-hover>
                </v-list-item-icon>
              </v-list-item>
              <v-divider :key="index" />
            </template>
          </v-list>
          <div
            class="pa-4 d-flex justify-space-between font-weight-bold body-1"
          >
            <div class="text-uppercase grey--text">Cart Subtotal</div>
            <div class="">{{ subTotalPrice }}</div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from '@nuxtjs/composition-api'

import productCompose from '~/composables/product'
import { useStore } from '~/store'

export default defineComponent({
  name: 'Cart',

  setup() {
    const store = useStore()
    const { cart, removeCart, subTotalPrice } = productCompose()
    const loading: ComputedRef<Boolean> = computed(() => store.getters.loading)

    return {
      cart,
      subTotalPrice,
      removeCart,
      loading,
    }
  },
})
</script>
