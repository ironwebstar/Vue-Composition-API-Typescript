<template>
  <v-app>
    <v-app-bar fixed app class="mx-auto">
      <v-toolbar-title
        class="cursor-pointer"
        @click="$router.push({ path: '/' })"
      >
        {{ title }}
      </v-toolbar-title>
      <v-spacer />
      <v-badge avatar bordered overlap class="mr-3">
        <span class="pr-2">{{ subTotalPrice }}</span>
        <v-avatar size="40">
          <v-btn icon to="/cart">
            <v-icon size="30">mdi-cart</v-icon>
          </v-btn>
        </v-avatar>
        <template #badge>
          <v-avatar :key="cart.length" cy-test="cart-number">
            {{ cart.length }}
          </v-avatar>
        </template>
      </v-badge>
      <v-badge avatar bordered overlap>
        <v-avatar size="40">
          <v-btn icon>
            <v-icon size="30">mdi-star</v-icon>
          </v-btn>
        </v-avatar>
        <template #badge>
          <v-avatar :key="wishList.length" cy-test="wishlist-number">
            {{ wishList.length }}
          </v-avatar>
        </template>
      </v-badge>
    </v-app-bar>
    <v-main class="mx-auto">
      <nuxt />
    </v-main>
    <v-footer app class="mx-auto">
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer />
      <span>Footer</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, useAsync } from '@nuxtjs/composition-api'

import productCompose from '~/composables/product'
import { useStore } from '~/store'

export default defineComponent({
  setup() {
    const title = ref('Brand')
    const { cart, wishList, subTotalPrice } = productCompose()

    const store = useStore()

    useAsync(() => {
      store.dispatch('nuxtServerInit')
    })

    return {
      title,
      cart,
      wishList,
      subTotalPrice,
    }
  },
})
</script>
