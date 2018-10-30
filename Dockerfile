FROM node:alpine
WORKDIR /usr/src
COPY . .
RUN npm ci
RUN npm run test
RUN npm uninstall -g npm
EXPOSE 80
CMD ["node", "app.js"]
