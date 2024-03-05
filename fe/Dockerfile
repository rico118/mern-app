FROM node:18-alpine



WORKDIR /

COPY . .

RUN  npm i -g npm@8.5.5

RUN npm i

RUN npm run build

CMD ["npm", "run", "preview"]