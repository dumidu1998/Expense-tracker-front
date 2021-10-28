FROM node:alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
RUN npm install --force
RUN export NODE_OPTIONS=--openssl-legacy-provider
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
