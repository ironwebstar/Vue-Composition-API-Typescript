<template>
  <v-container>
    <v-row v-if="loading" justify="center" align="center">
      <v-progress-circular
        indeterminate
        class="loading-indicator"
        color="primary"
        :size="50"
      />
    </v-row>

    <v-row v-else justify="center" align="start">
      <v-col
        v-for="product in products"
        :key="product.uuid"
        xs="12"
        sm="6"
        md="4"
        xl="3"
      >
        <product-item :product="product" />
      </v-col>
      <v-col cols="12">
        <div class="text-center">
          <v-pagination
            v-model="pageNumber"
            circle
            :length="12"
            :total-visible="8"
            @input="$router.push({ path: `/?page=${pageNumber}` })"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  watch,
  Ref,
  useRoute,
  computed,
  ComputedRef,
} from '@nuxtjs/composition-api'

import ProductItem from '~/components/ProductItem.vue'
import productCompose from '~/composables/product'
import { useStore } from '~/store'

export default defineComponent({
  name: 'ProductList',

  components: {
    ProductItem,
  },

  setup() {
    const pageNumber: Ref<number> = ref(1)
    const pageSize: Ref<number> = ref(6)
    const route = useRoute()

    const store = useStore()
    const { products } = productCompose()

    const getProducts = async (limit: number, offset: number) => {
      await store.dispatch('getProducts', { venueId: 164, limit, offset })
    }

    const loading: ComputedRef<Boolean> = computed(() => store.getters.loading)

    onMounted(() => {
      if (route.value.query.page)
        pageNumber.value = Number(route.value.query.page)
      getProducts(pageSize.value, pageSize.value * (pageNumber.value - 1))
    })

    watch(pageNumber, () => {
      getProducts(pageSize.value, pageSize.value * (pageNumber.value - 1))
    })

    return {
      pageNumber,
      pageSize,
      products,
      loading,
    }
  },
})
</script>
