There are 2 pages:

- product list pages as a homepage. (/)
- Cart page. (/cart)

[Demo](http://challenge-eric.surge.sh/)

## The following language/frameworks where used:

```bash
- Minimum supported node.js version: 12.0.0
- Vue v2.6.12(vue-cli v4.5.11), Nuxt v2.15.1, Typescript
- @nuxtjs/vuetify (Vuetify)
- @nuxtjs/composition-api (Composition API to be ready for vue.js v3)
- Jest, Vue Test Utils: unit testing
- Cypress: e2e testing
- SASS/SCSS: CSS preprocessor
- Docker
```

## Commands You can use:

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# serve with Docker by being ready for the production
$ docker-compose -up
$ docker-compose -up --build

# generate static project
$ npm run generate

# unit test
$ npm run test:unit

# e2e test with the browser
$ npm run test:e2e

# e2e test without the browser
$ npm run test:e2e-silent
```

## Building:

```bash
$ docker-compose -up --build

You now have a docker image containing the project.
```
