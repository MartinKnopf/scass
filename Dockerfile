FROM node:10

RUN npm install -g npm

WORKDIR /usr/src

ADD . .

RUN npm install

EXPOSE 80

CMD ["npm", "run", "start"]
