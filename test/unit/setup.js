import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const localStorageMock = (() => {
  let store = {}
  return {
    getItem: (key) => {
      return store[key]
    },
    setItem: (key, value) => {
      store[key] = value.toString()
    },
    clear: () => {
      store = {}
    },
    removeItem: (key) => {
      delete store[key]
    },
  }
})()
Object.defineProperty(window, 'localStorage', { value: localStorageMock })
