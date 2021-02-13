FROM node:14-alpine
WORKDIR /usr/app
ENV PORT 3000
WORKDIR /usr/app
COPY ./package*.json ./
RUN npm install --production
COPY ./ ./
RUN npm run build
EXPOSE 3000
USER node
CMD [ "npm", "start" ]