FROM node:19.2-alpine3.16
WORKDIR /app
COPY . .
RUN npm install express && npm install
EXPOSE 3000
CMD ["npm", "start"]