FROM node

LABEL org.opencontainers.image.authors="Your Name"

LABEL com.example.environment="production"

LABEL com.example.version="0.0.1"

ENV SERVER_PORT=4000

ENV NODE_ENV="production"

EXPOSE $SERVER_PORT
WORKDIR /index

COPY . .

RUN npm install

CMD node index.js
