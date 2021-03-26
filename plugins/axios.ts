/* eslint-disable import/no-mutable-exports */
import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

let $axios: NuxtAxiosInstance

const initializeAxios = (axiosInstance: NuxtAxiosInstance) => {
  $axios = axiosInstance
  $axios.setBaseURL('https://api.musement.com/api/v3/')
  $axios.setHeader('accept-language', 'it')
  $axios.setHeader('content-type', 'application/json')
  $axios.setHeader('x-musement-currency', 'EUR')
  $axios.setHeader('x-musement-version', '3.4.0')
}

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export { $axios }
export default accessor
