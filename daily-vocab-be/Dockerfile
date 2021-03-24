FROM node:alpine
WORKDIR /srv
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN ["npm", "install"]
COPY . .
EXPOSE 8080
CMD ["node", "src/index.js"]