module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    '@nuxtjs/composition-api': '@nuxtjs/composition-api/lib/entrypoint.js',
    'vuetify/lib(.*)': '<rootDir>/node_modules/vuetify/es5$1',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  testPathIgnorePatterns: ['<rootDir>/test/e2e'],
  setupFiles: ['./test/unit/setup.js'],
}
