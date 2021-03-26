FROM node:14 AS challenge

ENV APP_ROOT /usr/src/challenge
# create destination directory
RUN mkdir -p /${APP_ROOT}
WORKDIR /${APP_ROOT}

# RUN set -x && apt-get update && apt-get upgrade

COPY . .
RUN npm install

RUN ls

# ADD . ${APP_ROOT}
EXPOSE 3000
RUN npm run generate

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
# set app serving to permissive / assigned
# ENV NUXT_HOST=0.0.0.0
CMD ["npm", "run", "start"]
